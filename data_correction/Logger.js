/* eslint-disable no-underscore-dangle */

const LEVEL = {
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  ERROR: 'ERROR',
};

module.exports = class Logger {
  namespace;

  constructor(namespace) {
    this.namespace = namespace || '';
  }

  info(msg, ...params) {
    const message = this._out(msg, LEVEL.INFO, params);
    console.info(message);
  }

  debug(msg, ...params) {
    const message = this._out(msg, LEVEL.DEBUG, params);
    console.debug(message);
  }

  error(msg, ...params) {
    const message = this._out(msg, LEVEL.ERROR, params);
    console.error(message);
  }

  _out(msg, level, params) {
    let output = `[${level}]`;
    if (this.namespace) {
      output = output.concat(` -- ${this.namespace}`);
    }
    output = output.concat(` -- ${msg}`);
    if (params) {
      for (let i = 0; i < params.length; i += 1) {
        const element = params[i];
        output = output.concat(`\n\t${element}`);
      }
    }
    return output;
  }
};
