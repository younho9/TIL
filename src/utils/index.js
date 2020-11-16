const fs = require('fs');
const path = require('path');
const { isBuffer } = require('util');

const getFilesOf = ({ root = 'docs', dir }) =>
  fs
    .readdirSync(`${root}/${dir}`)
    .map(file => path.parse(file).name)
    .reduce(
      (files, fileName) =>
        fileName === 'images' || fileName === 'README' ? files : [...files, `${dir}/${fileName}`],
      [],
    );

const getDirectoriesOf = ({ root = 'docs', dir }) =>
  fs
    .readdirSync(`${root}/${dir}`)
    .reduce((dirs, dirName) => (dirName === 'README.md' ? dirs : [...dirs, dirName]), []);

module.exports = { getFilesOf, getDirectoriesOf };
