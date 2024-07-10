import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "coding",
  base: "/coding",
  description: "coding",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "java", link: "/java" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      "/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/java/": [
        {
          text: "java",
          items: [{ link: "/java/index.md" }, { link: "/api-examples" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/PortfolioCare/coding" }],
  },
});
