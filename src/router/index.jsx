import { useRoutes } from "react-router-dom";

import ContextLayout from "../layouts/Context";
import BlogLayout from "../layouts/Blog";

import ManifestPage from '../views/blog/ManifestPage'

import InventoryComp from '../views/blog/inventory-comp.md'
import InventoryUi from '../views/blog/inventory-ui.md'
import Abilities from '../views/blog/abilities.md'
import SocialRelations from '../views/blog/social-relations.md'
import SelectPicker from '../views/blog/select-picker.md'
import TextureAtlas from '../views/blog/texture-atlas.md'

import ErrorPage from "../views/error-page/Main";


function Router() {
  const routes = [
    {
      element: <ContextLayout />,
      children: [
        {
          element: <BlogLayout />,
          children: [
            {
              path: "/",
              element: <ManifestPage />,
            },
            {
              path: "/blog/inventory-comp",
              element: <InventoryComp />,
            },
            {
              path: "/blog/inventory-ui",
              element: <InventoryUi />,
            },
            {
              path: "/blog/social-relations",
              element: <SocialRelations />,
            },
            {
              path: "/blog/abilities",
              element: <Abilities />,
            },
            {
              path: "/blog/select-picker",
              element: <SelectPicker />,
            },
            {
              path: "/blog/texture-atlas",
              element: <TextureAtlas />,
            },
          ],
        },
        {
          path: "/error-page",
          element: <ErrorPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
