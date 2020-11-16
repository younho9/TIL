const { getFilesOf, getDirectoriesOf } = require('./src/utils');

module.exports = {
  Algorithms: [
    {
      type: 'category',
      label: 'Algorithms',
      items: getFilesOf({ root: 'docs', dir: 'Algorithms' }),
    },
  ],
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
