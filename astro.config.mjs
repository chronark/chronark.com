import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

// open external links in a new tab, no dependency needed
function externalLinks() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === "element" && node.tagName === "a") {
        const href = node.properties?.href;
        if (typeof href === "string" && /^https?:\/\//.test(href)) {
          node.properties.target = "_blank";
          node.properties.rel = ["noopener", "noreferrer"];
        }
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: "https://chronark.com",
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [externalLinks],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
