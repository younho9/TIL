const { getFilesOf, getDirectoriesOf } = require('./src/utils');

const categories = ['Algorithms', 'CS', 'Frontend', 'ETC'];

module.exports = categories.reduce(
  (sidebars, category) => ({
    ...sidebars,
    [category]: getDirectoriesOf({ root: 'docs', dir: category }).map(dir => ({
      type: 'category',
      label: dir,
      items: getFilesOf({ root: 'docs', dir: `${category}/${dir}` }),
    })),
  }),
  {},
);
