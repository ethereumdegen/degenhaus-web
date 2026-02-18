import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { marked } from 'marked';
import { paragraphs, blurbs } from '@/content/manifest.js';
import anime from 'animejs';

marked.setOptions({ breaks: true, gfm: true });

function renderMarkdown(md) {
  return { __html: marked.parse(md) };
}

function useBlurbMap() {
  return useMemo(() => {
    const map = {};
    for (const b of blurbs) {
      map[b.forParagraph] = b;
    }
    return map;
  }, []);
}

// ASCII characters for the matrix rain effect
const ASCII_CHARS = '01{}[]<>/\\|=+*#@$%&?!;:~^アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

function HeroBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const charsRef = useRef([]);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const cols = 28;
    const rows = 12;
    const chars = [];

    // Create ASCII grid
    for (let i = 0; i < cols * rows; i++) {
      const span = document.createElement('span');
      span.className = 'hero-char';
      const col = i % cols;
      const row = Math.floor(i / cols);
      span.style.left = `${(col / (cols - 1)) * 100}%`;
      span.style.top = `${(row / (rows - 1)) * 100}%`;
      span.textContent = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
      span.dataset.col = col;
      span.dataset.row = row;
      el.appendChild(span);
      chars.push(span);
    }
    charsRef.current = chars;

    // Cycle random characters
    const charInterval = setInterval(() => {
      const count = 15 + Math.floor(Math.random() * 20);
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * chars.length);
        chars[idx].textContent = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
      }
    }, 150);

    // Base breathing animation
    anime({
      targets: chars,
      opacity: [
        { value: 0.04, duration: 0 },
        { value: 0.18, duration: 2000 },
        { value: 0.04, duration: 2000 },
      ],
      delay: anime.stagger(40, { grid: [cols, rows], from: 'center' }),
      loop: true,
      easing: 'easeInOutSine',
    });

    // Column rain effect — random columns light up
    const rainInterval = setInterval(() => {
      const col = Math.floor(Math.random() * cols);
      const colChars = chars.filter((_, i) => i % cols === col);
      anime({
        targets: colChars,
        opacity: [0.05, 0.6, 0.05],
        color: ['#3b82f6', '#60a5fa', '#3b82f6'],
        duration: 1200,
        delay: anime.stagger(60),
        easing: 'easeOutExpo',
      });
    }, 400);

    // Mouse handler
    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    el.parentElement.addEventListener('mousemove', handleMouse);

    // Mouse reactive loop
    let rafId;
    const updateMouse = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (const span of charsRef.current) {
        const col = parseInt(span.dataset.col);
        const row = parseInt(span.dataset.row);
        const cx = col / (cols - 1);
        const cy = row / (rows - 1);
        const dist = Math.sqrt((cx - mx) ** 2 + (cy - my) ** 2);
        if (dist < 0.18) {
          const intensity = 1 - dist / 0.18;
          span.style.opacity = Math.min(0.9, intensity * 0.9);
          span.style.color = `rgba(96, 165, 250, ${intensity})`;
          span.style.textShadow = `0 0 ${intensity * 8}px rgba(59, 130, 246, ${intensity * 0.8})`;
          span.style.transform = `translate(-50%, -50%) scale(${1 + intensity * 0.6})`;
        } else {
          span.style.textShadow = 'none';
          span.style.transform = 'translate(-50%, -50%) scale(1)';
          span.style.color = '';
        }
      }
      rafId = requestAnimationFrame(updateMouse);
    };
    rafId = requestAnimationFrame(updateMouse);

    return () => {
      clearInterval(charInterval);
      clearInterval(rainInterval);
      cancelAnimationFrame(rafId);
      el.parentElement.removeEventListener('mousemove', handleMouse);
      el.innerHTML = '';
    };
  }, []);

  return <div className="hero-bg" ref={canvasRef} />;
}

function ManifestNav({ activeId }) {
  return (
    <nav className="manifest-nav">
      <div className="manifest-nav-inner">
        {paragraphs.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={`manifest-nav-link ${activeId === p.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {p.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

function BlurbCard({ blurb }) {
  return (
    <div className="manifest-blurb">
      <div className="manifest-blurb-image-wrap">
        <img src={blurb.image} alt={blurb.title} className="manifest-blurb-image" />
      </div>
      <h4 className="manifest-blurb-title">{blurb.title}</h4>
      <div
        className="manifest-blurb-content"
        dangerouslySetInnerHTML={renderMarkdown(blurb.content)}
      />
    </div>
  );
}

function ManifestPage() {
  const [activeId, setActiveId] = useState(paragraphs[0]?.id || '');
  const observerRef = useRef(null);
  const blurbMap = useBlurbMap();

  useEffect(() => {
    const options = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    }, options);

    paragraphs.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="manifest-page">
      <header className="manifest-hero">
        <HeroBackground />
        <div className="manifest-hero-inner">
          <h1 className="manifest-hero-title">
            The Agent Economy Is Here
          </h1>
          <p className="manifest-hero-subtitle">
            AI agents need identity, money, and reputation to become autonomous economic actors.
          </p>
        </div>
      </header>

      <ManifestNav activeId={activeId} />

      <div className="manifest-body">
        {paragraphs.map((p) => {
          const blurb = blurbMap[p.id];
          return (
            <div className="manifest-row" key={p.id}>
              <section id={p.id} className="manifest-section">
                <h2 className="manifest-section-title">{p.title}</h2>
                <div
                  className="manifest-section-content"
                  dangerouslySetInnerHTML={renderMarkdown(p.content)}
                />
              </section>
              <div className="manifest-row-right">
                {blurb && <BlurbCard blurb={blurb} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManifestPage;
