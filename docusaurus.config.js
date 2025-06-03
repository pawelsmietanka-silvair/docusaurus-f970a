// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Silvair Docs',
  tagline: 'Documentation for Silvair products',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bejewelled-paprenjak-7455d8.netlify.app',
  // Since you're serving at the root of that Netlify domain:
  baseUrl: '/',

  // GitHub pages deployment config.
  // Not strictly required for Netlify, but useful if you ever publish via GitHub Pages.
  organizationName: 'pawelsmietanka-silvair', // Your GitHub org/user name :contentReference[oaicite:4]{index=4}
  projectName: 'docusaurus-f970a',            // Your repo name :contentReference[oaicite:5]{index=5}

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization: default English only for now
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Point "edit this page" links to your GitHub repo:
          editUrl:
            'https://github.com/pawelsmietanka-silvair/docusaurus-f970a/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Update the "edit this page" link to your repo:
          editUrl:
            'https://github.com/pawelsmietanka-silvair/docusaurus-f970a/tree/main/blog/',
          // Enforce blogging best practices with warnings:
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your own social card if desired
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Silvair Docs',
        logo: {
          alt: 'Silvair Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/pawelsmietanka-silvair/docusaurus-f970a',
            label: 'GitHub',
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pawelsmietanka-silvair/docusaurus-f970a',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Silvair. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;