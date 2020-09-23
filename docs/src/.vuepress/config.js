const { description } = require('../../package');

module.exports = {
  title: '📝 TIL(Today I Learned)',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#D14376' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  themeConfig: {
    repo: 'younho9/TIL',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '🖋 Edit this page',
    lastUpdated: 'Last Updated',
    nextLinks: true,
    prevLinks: true,
    nav: [
      {
        text: 'Frontend',
        link: '/Frontend/',
      },
      {
        text: 'Algorithms',
        link: '/Algorithms/',
      },
      {
        text: 'Daily',
        link: '/Daily/',
      },
    ],
    sidebar: {
      '/Frontend/': [
        {
          title: 'Frontend',
          collapsable: false,
          sidebarDepth: 1,
          children: ['introduction/', 'using-vue/'],
        },
      ],
      '/Algorithms/': [
        {
          title: 'Algorithms',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'Programmers-42576. 완주하지 못한 선수/',
            'Programmers-42577. 전화번호 목록/',
          ],
        },
      ],
      '/Daily/': [
        {
          title: 'Daily',
          collapsable: false,
          sidebarDepth: 1,
          children: [],
        },
      ],
    },
  },

  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
