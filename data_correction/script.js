const { toArray, readData, writeData } = require('./utils');

const FILE_PROCESSORS = {};

FILE_PROCESSORS['Monsters'] = (it) => {
  it.languages = toArray(it.languages);
  it.senses = toArray(it.senses);
};

FILE_PROCESSORS['Ability-Scores'] = (it) => {
  it.desc = it.desc[0];
};

Object.keys(FILE_PROCESSORS).forEach((fileName) => {
  const data = readData(fileName);
  if (data) {
    const PROCESS = FILE_PROCESSORS[fileName];
    const values = JSON.parse(data.toString());
    values.forEach(it => PROCESS(it));
    const pretty = JSON.stringify(values, null, 2);
    writeData(fileName, pretty);
  }
});
