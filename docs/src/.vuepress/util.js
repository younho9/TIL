const fs = require('fs');
const { isBuffer } = require('util');

function getFilesOf(directory) {
  return fs
    .readdirSync(directory)
    .reduce(
      (acc, fileName) =>
        fileName === 'images' || fileName === 'README.md' ? acc : [...acc, fileName],
      [],
    );
}

function getDirectoriesOf(directory) {
  return fs
    .readdirSync(directory)
    .reduce((acc, dirName) => (dirName === 'README.md' ? acc : [...acc, dirName]), []);
}

module.exports = { getFilesOf, getDirectoriesOf };
