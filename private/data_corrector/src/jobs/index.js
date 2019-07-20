const fs = require('fs');
const path = require('path');
const { Logger } = require('../../../logger');

const log = new Logger('jobs');

const jobs = {};

try {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    const name = file.replace(/\.js/g, '');
    if (name !== 'index') {
      const url = path.resolve(__dirname, `./${name}`);
      const job = require(url);
      jobs[name] = job;
    }
  });
} catch (err) {
  log.error(err.message);
}

module.exports = jobs;
