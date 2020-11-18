const { getFilesOf, getDirectoriesOf } = require('./src/utils');

const categories = ['algorithms', 'cs', 'frontend', 'etc'];

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
