// manifest.js — Content definition for the Agent Economy manifesto
// Structure mirrors RON (Rusty Object Notation):
//
//   Manifest(
//     paragraphs: [ Paragraph(id: "...", title: "...", content: "..."), ... ],
//     blurbs: [ Blurb(image: "...", title: "...", content: "..."), ... ],
//   )

export const paragraphs = [
  {
    id: "crypto-broken",
    title: "Crypto Is Dying — And It's Our Fault",
    content: `
Retail crypto has become a **casino disguised as innovation**. Memecoins, pump-and-dumps, influencer scams, fake liquidity, rug pulls — the entire space has devolved into a gambling den where the house always wins and newcomers get fleeced. None of it produces real value. None of it solves real problems.

This isn't a phase. It's killing cryptocurrency as a whole. Every cycle, the same playbook: hype something worthless, extract money from latecomers, move on. Regulators point to the wreckage as justification for crackdowns. Serious builders leave. Public trust evaporates. **The technology that was supposed to democratize finance is instead becoming a synonym for fraud.**
`
  },
  {
    id: "agents-save-crypto",
    title: "AI Agents Are Crypto's Savior",
    content: `
And crypto will save AI Agents. The savior of crypto isn't another L2, another token standard, or another "community." It's **AI agents** — software that uses crypto for what it was actually designed for: programmable, permissionless, trustless value transfer.

Agents doing real work — marketing, social media management, data analysis, customer service — and getting paid in stablecoins. Agents that bridge crypto and the real economy, creating **long-term, sustainable value** instead of zero-sum speculation. Not trading bots front-running retail. Software that earns money by being **good at its job**.
`
  },
  {
    id: "agent-economy",
    title: "The Agent Economy",
    content: `
**AI agents are becoming autonomous economic actors.** They negotiate, transact, and allocate resources without waiting for a human to click "confirm."

Millions of software agents already operate 24/7 — routing payments, querying APIs, managing portfolios, coordinating with other agents. But the current internet wasn't built for this. **The agent economy demands new primitives**: identity that software can own, money that software can move, and reputation that software can earn.
`
  },
  {
    id: "identity",
    title: "Why Agents Need Identity",
    content: `
An agent without identity is a ghost — it can make promises it never keeps, cause harm with no consequences, and impersonate other agents freely. **Every economic interaction assumes the parties can be identified.**

Agent identity must be **scarce**, **persistent**, **verifiable**, and **discoverable**. Ethereum wallets provide this naturally — a key pair that can sign messages, prove ownership, and interact on-chain. [EIP-8004](https://github.com/ethereum/EIPs/issues/8004) extends this with on-chain registries where agents publish capabilities, endpoints, and trust scores.

`
  },
  {
    id: "payments",
    title: "Decentralized Crypto Payments",
    content: `
Traditional payment rails assume a person with a bank account. **AI agents can't open bank accounts, and they shouldn't have to.** Crypto solves this — a wallet is just a key pair, sending money is just signing a transaction.

The key insight is that **money becomes an API**. Payment is just another tool call, no different from reading a file. The agent economy needs stablecoins for predictable pricing, micropayments for per-request billing, and programmable escrow for trustless delivery.
`
  },
  {
    id: "sybil",
    title: "The Sybil Problem & Digital Scarcity",
    content: `
What stops someone from spinning up a million fake agents to game the system? This is the **Sybil problem** — the central challenge of any decentralized agent economy.

Blockchains solve this through **economic scarcity** — on-chain identity costs gas, reputation requires real transactions, and bad behavior destroys value. Game theory, not gatekeepers. Scarce credentials like [Stark License](https://starkbot.ai/starklicense) bind agent identity to provable skin-in-the-game.
`
  },
  {
    id: "x402",
    title: "HTTP 402: Pay-Per-Request",
    content: `
No API keys. No subscriptions. No billing departments. Just **pay and use**. Every HTTP endpoint becomes a vending machine for AI capabilities.
`
  },
  {
    id: "memory",
    title: "Agent Memory & Continuity",
    content: `
A stateless agent is a tool. A stateful agent is a **partner**. Memory transforms the relationship — agents that remember your preferences, track context, and learn from mistakes become genuinely more capable over time.

The answer is **structured, persistent memory** — importance-ranked facts, daily logs, semantic knowledge graphs. Identity tells you *who* the agent is. Memory tells you that the agent *knows who you are*.
`
  },
  {
    id: "multi-platform",
    title: "Multi-Platform Presence",
    content: `
**An agent that only lives on one platform is fundamentally limited.** True presence means operating everywhere humans already work — Discord, Slack, Telegram, X, email, notes, calendar — with shared context and unified memory across all of them.

The right architecture is a **unified message pipeline** — all messages flow through the same processing core. An agent that manages your Discord community also posts to X, updates your notes, schedules your calendar, and responds on Telegram. The platform is just the interface. The agent is the intelligence behind it.
`
  },
  {
    id: "starkbot",
    title: "StarkBot: Crypto + AI + Claw",
    content: `
**StarkBot is the last interface you'll ever need** — a single AI agent that lives across every platform you use, remembers everything, and actually *does things* on your behalf.

Tell it what you need in plain language. It posts to X, manages your Discord, answers your Telegram, schedules your calendar, takes your notes, moves your money, deploys your code — **all from one conversation**. No dashboards. No logins. No UIs to learn. Just you and an agent that gets better at being *your* agent every single day.

This isn't a demo. It isn't a waitlist. StarkBot is live, it's free to try, and the inference costs you nothing. **[Get started now at starkbot.cloud](https://starkbot.cloud)** — connect your first platform in under a minute and feel what it's like when your entire digital life starts working *for* you instead of the other way around.
`
  },
  {
    id: "road-ahead",
    title: "Crypto + AI Agent Infrastructure",
    content: `
The infrastructure for the agent economy isn't theoretical — it's live. **[DeFi Relay](https://defirelay.com)** provides the backbone: production-grade infrastructure purpose-built for AI agents to transact, create, and operate autonomously.

**[superrouter.defirelay.com](https://superrouter.defirelay.com)** accepts micropayments in $STARKBOT to give agents access to state-of-the-art image and video generation — enabling incredible visual content for maximal engagement and marketing, all paid per-request with no subscriptions or API key management.

**[inference.defirelay.com](https://inference.defirelay.com)** is a multi-model routing layer that intelligently dispatches requests across MiniMax, Kimi, OpenAI, Morpheus Protocol, and more — agents get the best model for each task at the best price. New users of supported crypto agent software receive **free AI credits** to get started immediately, zero friction.

This is what the agent economy looks like when it's actually running. Not whitepapers. Not roadmaps. **Working infrastructure, live today.**
`
  }
];

// Each blurb is linked to a paragraph via forParagraph
export const blurbs = [
  {
    id: "blurb-crypto-broken",
    forParagraph: "crypto-broken",
    image: "/blog/blurbs/crypto-broken.svg",
    title: "The Casino Era",
    content: `Retail crypto became a **gambling den** driven on hype and false promise.`
  },
  {
    id: "blurb-identity",
    forParagraph: "identity",
    image: "/blog/blurbs/identity.svg",
    title: "Cryptographic Identity",
    content: `**Ethereum wallets** as agent identity. No usernames. Just math.`
  },
  {
    id: "blurb-x402",
    forParagraph: "x402",
    image: "/blog/blurbs/x402.svg",
    title: "x402 Protocol",
    content: `**Stablecoin micropayments** on every HTTP request. Pay and use.`
  },
  {
    id: "blurb-sybil",
    forParagraph: "sybil",
    image: "/blog/blurbs/sybil.svg",
    title: "Sybil Resistance",
    content: `**Skin in the game.** Game theory replaces gatekeepers.`
  },
  {
    id: "blurb-memory",
    forParagraph: "memory",
    image: "/blog/blurbs/memory.svg",
    title: "Persistent Memory",
    content: `Agents that **remember**. Real understanding that compounds over time.`
  },
  {
    id: "blurb-starkbot",
    forParagraph: "starkbot",
    image: "/blog/blurbs/starkbot.jpeg",
    title: "StarkBot",
    content: `**Live now, free to try.** No dashboards. No UIs. Just results.`
  }
];
