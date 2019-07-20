/* eslint-disable no-param-reassign */
const { toArray } = require('../utils');

module.exports = function process(monster) {
  monster.languages = toArray(monster.languages);
  monster.senses = toArray(monster.senses);
};
