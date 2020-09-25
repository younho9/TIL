const { getFilesOf, getDirectoriesOf } = require('./util');
const { description } = require('../../package');

module.exports = {
  title: '📝 TIL(Today I Learned)',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#D14376' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  themeConfig: {
    repo: 'younho9/TIL',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '🖋 Edit this page',
    lastUpdated: 'Last Updated',
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
        text: 'CS',
        link: '/CS/',
      },
      {
        text: 'Daily',
        link: '/Daily/',
      },
    ],
    sidebar: {
      '/Frontend/': getDirectoriesOf('src/Frontend').map(dir => ({
        title: dir,
        collapsable: true,
        sidebarDepth: 1,
        children: getFilesOf(`src/Frontend/${dir}`).map(fileName => `${dir}/${fileName}`),
      })),
      '/Algorithms/': [
        {
          title: 'Algorithms',
          collapsable: false,
          sidebarDepth: 1,
          children: getFilesOf('src/Algorithms'),
        },
      ],
      '/CS/': getDirectoriesOf('src/CS').map(dir => ({
        title: dir,
        collapsable: true,
        sidebarDepth: 1,
        children: getFilesOf(`src/CS/${dir}`).map(fileName => `${dir}/${fileName}`),
      })),
      '/Daily/': getDirectoriesOf('src/Daily').map(dir => ({
        title: dir,
        collapsable: true,
        sidebarDepth: 1,
        children: getFilesOf(`src/Daily/${dir}`).map(fileName => `${dir}/${fileName}`),
      })),
    },
  },

  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
