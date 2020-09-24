const fs = require('fs');
const { isBuffer } = require('util');

function getFilesOf(base, directory) {
  return fs
    .readdirSync(`${base}/${directory}`)
    .reduce(
      (acc, fileName) => (fileName === 'images' ? acc : [...acc, `${directory}/${fileName}`]),
      [],
    );
}

function getDirectoriesOf(directory) {
  return fs
    .readdirSync(directory)
    .reduce((acc, dirName) => (dirName === 'README.md' ? acc : [...acc, dirName]), []);
}

module.exports = { getFilesOf, getDirectoriesOf };
