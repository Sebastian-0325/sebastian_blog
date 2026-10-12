// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sebastian's blog",
  tagline: 'I contain multitudes',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sebastian.tw',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sebastian-0325', // Usually your GitHub org/user name.
  projectName: 'sebastian_blog', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
       
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Sebastian's blog",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
         
          {to: '/blog', label: 'Blog', position: 'left'},
		  {
		  	to: '/now',
		  	label: '近況',
		  	position: 'left'
		  	},
		  {
		  	to: '/about',
		  	label: '關於我',
		  	position: 'left'
		  },
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站內連結',
            items: [
              
              {
              	label: '貼文/blog',
              	to: '/blog',
              },
              {
              	label: '近況/now',
              	to: '/now',
              },
              {
              	label: '關於我/about',
              	to: '/about',
              },
            ],
          },
          {
          	title: '更多',
          	items: [
          		{
          			label: 'RSS',
          			href: 'https://sebastian.tw/blog/rss.xml',
          		}
          	]
          }
         
        ],
        copyright: `版權所有 © ${new Date().getFullYear()} Sebastian Huang `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
