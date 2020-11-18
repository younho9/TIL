const fs = require('fs');
const path = require('path');
const { isBuffer } = require('util');

const getFilesOf = dir =>
  fs
    .readdirSync(dir)
    .reduce((files, fileName) => (fileName.includes('.') ? [...files, fileName] : files), [])
    .map(file => path.parse(file).name);

const getDirectoriesOf = dir =>
  fs
    .readdirSync(dir)
    .reduce((dirs, dirName) => (dirName.includes('.') ? dirs : [...dirs, dirName]), []);

const appendPath = (path, target) => `${path}/${target}`;

const getFirstContent = category => {
  const categoryPath = appendPath('docs', category);
  const subCategoryPath = appendPath(categoryPath, getDirectoriesOf(categoryPath)[0]);
  return appendPath(subCategoryPath, getFilesOf(subCategoryPath)[0]);
};

const removePriority = dir => dir.split('-').slice(1).join('-');

module.exports = { getFilesOf, getDirectoriesOf, getFirstContent, appendPath, removePriority };
