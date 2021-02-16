const fs = require('fs');
const path = require('path');
const { isBuffer } = require('util');
const { DATE_PREFIX_LENGTH } = require('../constants');

// 디렉토리에 있는 파일 이름 배열을 반환함.
const getFilesOf = dir =>
  fs
    .readdirSync(dir)
    .reduce((files, fileName) => (fileName.includes('.') ? [...files, fileName] : files), [])
    .map(file => path.parse(file).name);

// 디렉토리에 있는 디렉토리 목록을 반환함.
const getDirectoriesOf = dir =>
  fs
    .readdirSync(dir)
    .reduce((dirs, dirName) => (dirName.includes('.') ? dirs : [...dirs, dirName]), []);

const appendPath = (path, target) => `${path}/${target}`;

const getFirstContent = category => {
  const categoryPath = appendPath('docs', category);
  const subCategoryPath = appendPath(categoryPath, getDirectoriesOf(categoryPath)[0]);
  return appendPath(subCategoryPath, getFilesOf(subCategoryPath)[0].slice(DATE_PREFIX_LENGTH));
};

const removePriority = dir => dir.split('-').slice(1).join('-');

module.exports = { getFilesOf, getDirectoriesOf, getFirstContent, appendPath, removePriority };
