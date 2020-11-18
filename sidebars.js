const { getFilesOf, getDirectoriesOf } = require('./src/utils');
const { CATEGORY_SLUGS, SUB_CATEGORY_SLUGS } = require('./src/constants');

module.exports = Object.values(CATEGORY_SLUGS).reduce(
  (sidebars, category) => ({
    ...sidebars,
    [category]: getDirectoriesOf({ root: 'docs', dir: category.toLowerCase() }).map(dir => ({
      type: 'category',
      label: SUB_CATEGORY_SLUGS[dir],
      items: getFilesOf({ root: 'docs', dir: `${category.toLowerCase()}/${dir}` }),
    })),
  }),
  {},
);
