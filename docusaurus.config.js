// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { config } = require("./src/config");

/** @type {import('@docusaurus/types').Config} */
const docussaurusConfig = {
  title: "TheBugging",
  tagline:
    "TheBugging is a complete SaaS platform that offers error logging helping identifying and fixing production bugs in Real-World Web applications",
  url: config.landingURL,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "the-bugging", // Usually your GitHub org/user name.
  projectName: "the-bugging", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "TheBugging",
        logo: {
          alt: "TheBugging Logo",
          src: "img/logo_transparent.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/the-bugging",
            label: "GitHub",
            position: "right",
          },
          {
            href: config.baseURL,
            label: "Platform",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/the-bugging",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "TheBugging",
                to: config.landingURL,
              },
              {
                label: "TheBugging - Platform",
                to: config.baseURL,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TheBugging, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = docussaurusConfig;
