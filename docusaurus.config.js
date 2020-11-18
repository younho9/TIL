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
        {
          to: 'docs/algorithms/programmers/2020-카카오-인턴십-경주로-건설',
          activeBasePath: 'docs/algorithms',
          label: 'Algorithms',
          position: 'right',
        },
        {
          to: 'docs/cs/design-pattern/observer-pattern-vs-pub-sub-pattern',
          activeBasePath: 'docs/cs',
          label: 'CS',
          position: 'right',
        },
        {
          to: 'docs/frontend/bootstrap/bootstrap-getting-started',
          activeBasePath: 'docs/frontend',
          label: 'Frontend',
          position: 'right',
        },
        {
          to: 'docs/etc/setting/1-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기',
          activeBasePath: 'docs/etc',
          label: 'ETC',
          position: 'right',
        },
        { to: 'log/2020', label: '2020 Log', position: 'right' },
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
          items: [
            {
              label: 'Algorithms',
              to: 'docs/algorithms/programmers/2020-카카오-인턴십-경주로-건설',
            },
            {
              label: 'CS',
              to: 'docs/cs/design-pattern/observer-pattern-vs-pub-sub-pattern',
            },
            {
              label: 'Frontend',
              to: 'docs/frontend/bootstrap/bootstrap-getting-started',
            },
            {
              label: 'etc',
              to: 'docs/etc/setting/1-mac-버추얼박스-virtualbox-에-우분투-ubuntu-설치하기',
            },
          ],
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
  ],
};
