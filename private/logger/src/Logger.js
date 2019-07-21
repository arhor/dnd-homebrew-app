/* eslint-disable no-underscore-dangle */
const { blue, yellow, red } = require('./colors');
const match = require('../../experimental/match');

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

  /**
   * @param {string} msg
   * @param {string} level
   * @param {string} params
   */
  _out(msg, level, params) {
    // let colorized;
    // switch (level) {
    //   case LEVEL.INFO:
    //     colorized = blue(level);
    //     break;
    //   case LEVEL.DEBUG:
    //     colorized = yellow(level);
    //     break;
    //   case LEVEL.ERROR:
    //     colorized = red(level);
    //     break;
    //   default:
    //     colorized = level;
    //     break;
    // }
    // ~~~ experimental feature ~~~
    const colorized = match(level)(
      [LEVEL.INFO, _ => blue(_)],
      [LEVEL.DEBUG, _ => yellow(_)],
      [LEVEL.ERROR, _ => blue(_)],
      () => level,
    );

    let output = `[${colorized}]`;
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
