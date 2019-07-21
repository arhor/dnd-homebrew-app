/* eslint-disable lines-between-class-members */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { blue, yellow, red } = require('./colors');
const match = require('../../experimental/match');

const LEVEL = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  ERROR: 'ERROR',
};

/**
 * Any function in this module prefixed with '_' considered as private.
 * As well as node.js and JS at all does not support 'real' private class members
 * we need to make some kind of closure to disable prevent dumb user from using
 * private class implementation.
 * @author Maksim Buryshyent
 */

/**
 * ===== Global list of todoshechka =====
 * 1) output target should be configurable to provide different destinations
 *    such as file, console, etc.
 * 2) loggers should provide corresponding colorization according to the env
 *    (node, browser, etc.)
 */

/**
 * @param {Logger} logger
 * @param {String} msg
 * @param {String} level
 * @param {Array} params
 */
function _format(logger, msg, level, params) {
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
    [LEVEL.ERROR, _ => red(_)],
    () => level,
  );

  let output = `[${level === LEVEL.INFO ? ' ' : ''}${colorized}]`;

  if (logger.namespace) {
    output = output.concat(` -- ${logger.namespace}`);
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

function _initialize(logger, config) {
  if (typeof config === 'string') {
    logger.namespace = config;
  } else if (typeof config === 'object') {
    logger.namespace = config.namespace;
    logger.loggingLevel = String(config.loggingLevel).toUpperCase();
  }
}

function _isSet(prop) {
  return prop !== undefined
      || prop !== null;
}

// TODO: cahce allowed levels at time of creation
function _isAllowed(logger, targetLevel) {
  let result = true;
  if (_isSet(logger.loggingLevel)) {
    const levels = Object.keys(LEVEL);
    const ordinal = levels.indexOf(logger.loggingLevel);
    if (ordinal >= 0) {
      const available = levels.slice(ordinal, levels.length);
      if (!available.includes(targetLevel)) {
        result = false;
      }
    }
  }
  return result;
}

module.exports = class Logger {
  namespace;
  loggingLevel;

  /**
   * @param {String || Object} namespace logger namespace to be displayed
   */
  constructor(config) {
    _initialize(this, config);
  }

  info(msg, ...params) {
    if (_isAllowed(this, LEVEL.INFO)) {
      const message = _format(this, msg, LEVEL.INFO, params);
      console.info(message);
    }
  }

  debug(msg, ...params) {
    if (_isAllowed(this, LEVEL.DEBUG)) {
      const message = _format(this, msg, LEVEL.DEBUG, params);
      console.debug(message);
    }
  }

  error(msg, ...params) {
    if (_isAllowed(this, LEVEL.ERROR)) {
      const message = _format(this, msg, LEVEL.ERROR, params);
      console.error(message);
    }
  }
};
