import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "VT",
  themeConfig: {
    enableDarkMode: true,
    repo: "https://github.com/ulivz/vuepress-theme-vt",
    logo: "/logo.svg",
    lastUpdated: "Last Updated",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "API", link: "/api/" },
      {
        text: "Nav Links on the left",
        link: "/guide/navbar.html#nav-links-on-the-left",
        position: "left",
      },
      {
        text: "More",
        items: [
          { text: "Guide", link: "/guide/" },
          { text: "API", link: "/api/" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Introduction",
          collapsable: false,
          children: ["/guide/", "/guide/getting-started"],
        },
        {
          title: "Guide",
          collapsable: false,
          children: [
            "/guide/search",
            "/guide/home",
            "/guide/api-page",
            "/guide/configuration",
            "/guide/global-components",
            "/guide/migration",
            "/guide/dark-mode",
            "/guide/page-layout",
            "/guide/code-switcher",
            "/guide/status",
            "/guide/navbar",
            "/guide/documenting",
          ],
        },
        {
          title: "Reference",
          collapsable: false,
          children: [
            [
              "https://vuepress.vuejs.org/theme/default-theme-config.html",
              "Default Theme Config",
            ],
          ],
        },
      ],
      "/api/": [
        {
          title: "Config",
          path: "/api/",
          collapsable: false,
          children: [
            "/api/config-theme",
            "/api/config-frontmatter",
            "/api/config-home",
          ],
        },
      ],
    },
    codeSwitcher: {
      groups: {
        default: { ts: "TypeScript", js: "JavaScript" },
        "plugin-usage": { tuple: "Tuple", object: "Object" },
      },
    },
  },
}));
