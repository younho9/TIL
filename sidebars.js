const { getFilesOf, getDirectoriesOf, removePriority } = require('./src/utils');
const { CATEGORY_SLUGS, SUB_CATEGORY_SLUGS } = require('./src/constants');

const categories = getDirectoriesOf('docs');
const getSubCategories = category => getDirectoriesOf(`docs/${category}`);

const createSubCategoryItem = (category, subCategory) => ({
  type: 'category',
  label: SUB_CATEGORY_SLUGS[removePriority(subCategory)],
  items: getFilesOf(`docs/${category}/${subCategory}`).map(
    fileName => `${category}/${subCategory}/${fileName}`,
  ),
});

module.exports = categories.reduce(
  (sidebars, category) => ({
    ...sidebars,
    [category]: getSubCategories(category).map(subCategory =>
      createSubCategoryItem(category, subCategory),
    ),
  }),
  {},
);
