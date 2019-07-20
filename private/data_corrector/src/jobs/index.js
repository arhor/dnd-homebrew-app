const fs = require('fs');
const { Logger } = require('../../../logger');

const log = new Logger('jobs');

const jobs = {};

try {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    const name = file.replace(/\.js/g, '');
    if (name !== 'index') {
      const path = `./${name}`;
      const job = require(path); // replace with import()
      jobs[name] = job;
    }
  });
} catch (err) {
  log.error(err.message);
}

module.exports = jobs;
