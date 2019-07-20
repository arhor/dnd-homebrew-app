/**
 * @param {String} str
 */
function toArray(input) {
  const str = (input || '');
  return str.split(',').map(it => it.trim());
}

module.exports = {
  toArray,
};
