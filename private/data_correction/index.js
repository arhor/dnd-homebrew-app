const fs = require('fs');
const { Logger } = require('../logger');
const DataHelper = require('./src/classes/DataHelper');

const jobs = require('./src/jobs');

const log = new Logger('corrector-main');

/**
 * @param {String} str
 */
function isEmpty(str) {
  return str === undefined
      || str === null
      || str === '';
}

function validateConfig(config) {
  const props = ['data-source', 'file-prefix'];
  props.forEach((name) => {
    const prop = config[name];
    if (isEmpty(prop)) {
      throw new Error('property [data-source]');
    }
  });
}

try {
  log.debug('initializing data corrector...');
  const buffer = fs.readFileSync(`${__dirname}/config.json`);
  const config = JSON.parse(buffer);

  try {
    validateConfig(config);
    const dataSource = `${__dirname}/../../${config['data-source']}`;
    const dataTarget = `${__dirname}`;
    const filePrefix = config['file-prefix'];

    const helper = new DataHelper(dataSource, dataTarget, filePrefix);

    Object.keys(jobs).forEach((name) => {
      log.debug(`running job [${name}]`);
      const data = helper.readData(name);
      if (data) {
        const process = jobs[name];
        const values = JSON.parse(data.toString());
        values.forEach(it => process(it));
        const pretty = JSON.stringify(values, null, 2);
        helper.writeData(name, pretty);
      }
    });
  } catch (validationError) {
    log.error(validationError);
  }
} catch (error) {
  log.error('initializing failed:', error.message);
}
