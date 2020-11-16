const { getFilesOf, getDirectoriesOf } = require('./src/utils');

module.exports = {
  Algorithms: getDirectoriesOf({ root: 'docs', dir: 'Algorithms' }).map(dir => ({
    type: 'category',
    label: dir,
    items: getFilesOf({ root: 'docs', dir: `Algorithms/${dir}` }),
  })),
  CS: getDirectoriesOf({ root: 'docs', dir: 'CS' }).map(dir => ({
    type: 'category',
    label: dir,
    items: getFilesOf({ root: 'docs', dir: `CS/${dir}` }),
  })),
  Frontend: getDirectoriesOf({ root: 'docs', dir: 'Frontend' }).map(dir => ({
    type: 'category',
    label: dir,
    items: getFilesOf({ root: 'docs', dir: `Frontend/${dir}` }),
  })),
};
