// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scream and Survive: 1.5',
  tagline: 'Server SemiVanilla RPG 1.19+',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://onicalls.github.io',
  baseUrl: '/',
  organizationName: 'onicalls',
  projectName: 'sas-wiki',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'parches',
        path: 'parches',
        routeBasePath: 'parches',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/sas-logo.png',
      navbar: {
        title: 'SaS: 1.5',
        logo: {
          alt: 'SaS: 1.5 Logo',
          src: 'img/sas_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/parches', label: 'Parches', position: 'left'},
          {
            href: 'https://ds.sascraft.club/',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Configuración',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@sas1.5',
              },
              {
                label: 'Discord',
                href: 'https://ds.sascraft.club/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/sas2mc/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Parches',
                to: '/parches',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scream and Survive, 0nicalls.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
