const fs = require('fs');
const _ = require('lodash');

const envVariables = require('../config/.env.sample');

const createENVFile = (directory, variables) => {
  _.each(variables, (variable) => {
    fs.appendFileSync(`./${directory}/.env`, variable + '\n');
  })
}

const buildEnv = () => {
  _.each(envVariables, (value, key) => {
    console.log(key);
    fs.writeFileSync(`./${key}/.env`, '', 'utf8')
    createENVFile(key, value);
  });
}

buildEnv();
