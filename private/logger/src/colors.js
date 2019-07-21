const TXT_CLR = {
  BLUE: 34,
  YELLOW: 33,
  RED: 31,
};

/**
 * @param {number} color
 * @param {string} text
 */
const template = (color, text) => `\x1b[${color}m${text}\x1b[0m`;

module.exports = {
  blue: str => template(TXT_CLR.BLUE, str),
  yellow: str => template(TXT_CLR.YELLOW, str),
  red: str => template(TXT_CLR.RED, str),
};
