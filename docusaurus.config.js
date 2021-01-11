const { getDirectoriesOf, getFilesOf, appendPath, getFirstContent } = require('./src/utils');
const { CATEGORY_SLUGS } = require('./src/constants');

const docNavs = Object.entries(CATEGORY_SLUGS).map(([category, categorySlug]) => ({
  to: getFirstContent(category),
  activeBasePath: appendPath('docs', category),
  label: categorySlug,
  position: 'right',
}));

const docFooters = docNavs.map(({ to, label }) => ({ to, label }));

module.exports = {
  title: 'TIL(Today I Learned)',
  tagline: '하루동안 공부한 것들을 기록하는 공간',
  url: 'https://til.younho9.dev',
  baseUrl: '/',
  onBrokenLinks: 'error',
  favicon: 'img/logo.png',
  organizationName: 'younho9',
  projectName: 'til',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: 'Today I Learned',
      logo: {
        alt: 'Today I Learned',
        src: 'img/logo.png',
      },
      items: [
        ...docNavs,
        { to: 'log/2020', label: '2020 Log', position: 'right' },
        { to: 'log/2021', label: '2021 Log', position: 'right' },
        {
          href: 'https://github.com/younho9/til',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href:
            'https://www.notion.so/younho9/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
          position: 'right',
          className: 'header-notion-link',
          'aria-label': 'Notion CMS',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: docFooters,
        },
        {
          title: 'Personal Links',
          items: [
            {
              label: 'younho9.dev',
              href: 'https://younho9.dev',
            },
            {
              label: 'Github',
              href: 'https://github.com/younho9',
            },
            {
              label: 'Notion',
              href: 'https://bit.ly/yh9blog',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/younho_9',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/story/younho9',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '2021 Log',
              to: 'log/2021',
            },
            {
              label: '2020 Log',
              to: 'log/2020',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/younho9/til',
            },
            {
              label: 'Notion',
              href:
                'https://www.notion.so/younho9/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} younho9. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/younho9/til/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'twoZeroLog',
        routeBasePath: 'log/2020',
        path: './log/20-log',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'twoOneLog',
        routeBasePath: 'log/2021',
        path: './log/21-log',
      },
    ],
  ],
};
