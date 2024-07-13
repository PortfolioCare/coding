import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "coding",
  base: "/coding",
  description: "coding",
  lastUpdated: true,
  head: [
    ["link", { rel: "stylesheet", href: "/coding/jsdelivr/fancybox.css" }],
    ["script", { src: "/coding/jsdelivr/fancybox.umd.js" }],
  ],
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },

  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "java", link: "/java" },
      { text: "redis", link: "/redis" },
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
          // text: "java",
          items: [
            { text: "简介", link: "/java/index.md" },
            { text: "java虚拟机8-11双版本", link: "/java/1.md" },
          ],
        },
      ],
      "/redis/": [
        {
          text: "redis",
          items: [{ link: "/redis/index.md" }, { link: "/api-examples" }],
        },
      ],
      "/jsdelivr/": [
        {
          items: [{ link: "/jsdelivr/fancybox.css" }, { link: "/jsdelivr/fancybox.umd.js" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/PortfolioCare/coding" }],
  },
});
