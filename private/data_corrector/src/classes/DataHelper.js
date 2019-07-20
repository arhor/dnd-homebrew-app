/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const { Logger } = require('../../../logger');

const log = new Logger('DataHelper');

module.exports = class DataHelper {
  constructor(dataSource, dataTarget, filePrefix) {
    this.dataSource = dataSource;
    this.dataTarget = dataTarget;
    this.filePrefix = filePrefix;
  }

  readData(fileName) {
    const from = this._source(fileName);
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

  writeData(fileName, data, tries) {
    log.debug('writing data...');
    const correctionDir = fs.readdirSync(this.dataTarget);
    if (correctionDir.includes('data')) {
      const to = this._target(fileName);
      log.debug(`destination file [${to}]`);
      try {
        fs.writeFileSync(to, data);
      } catch (writeError) {
        log.error(writeError.message);
      }
    } else {
      const num = Number(tries || 0);
      log.debug(`data directory is missing, try to create...[${num}]`);
      if (num <= 10) {
        try {
          fs.mkdirSync(`${this.dataTarget}/data`);
          this.writeData(fileName, data, num + 1);
        } catch (dirError) {
          log.error(dirError.message);
          log.error(`failed after ${num} tries`);
        }
      }
    }
  }

  _source(name) {
    return `${this.dataSource}/${this.filePrefix}-${name}.json`;
  }

  _target(name) {
    return `${this.dataTarget}/data/${this.filePrefix}-${name}.json`;
  }
};
