const fs = require('fs');
const Logger = require('./Logger');

const DATA_SOURCE = './src/assets/data';
const DATA_TARGET = './data_correction/dist';

const log = new Logger('utils');

function source(name) {
  return `${DATA_SOURCE}/5e-SRD-${name}.json`;
}

function target(name) {
  return `${DATA_TARGET}/5e-SRD-${name}.json`;
}

/**
 * @param {String} str
 */
function toArray(input) {
  const str = (input || '');
  return str.split(',').map(it => it.trim());
}

function readData(fileName) {
  const from = source(fileName);
  log.debug(`reading file [${from}]`);
  let data;
  try {
    data = fs.readFileSync(from);
    log.debug(`SUCCESS -- ${data.byteLength} bytes`);
  } catch (readError) {
    log.error(readError.message);
  }
  return data;
}

function writeData(fileName, data, tries) {
  log.debug('writing data...');
  const correctionDir = fs.readdirSync('./data_correction');
  if (correctionDir.includes('dist')) {
    const to = target(fileName);
    log.debug(`destination file [${to}]`);
    try {
      fs.writeFileSync(to, data);
    } catch (writeError) {
      log.error(writeError.message);
    }
  } else {
    const num = Number(tries || 0);
    log.debug(`dist directory is missing, try to create...[${num}]`);
    if (num <= 10) {
      try {
        fs.mkdirSync(DATA_TARGET);
        writeData(fileName, data, num + 1);
      } catch (dirError) {
        log.error(dirError.message);
        log.error(`failed after ${num} tries`);
      }
    }
  }
}

module.exports = {
  toArray,
  readData,
  writeData,
};
