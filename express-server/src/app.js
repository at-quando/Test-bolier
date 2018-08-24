const config = require('./config');
const app = require('../src/lib/Express');
const models = require('../src/models');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912

if (!module.parent) {
  mongoose.connect(config.db.url).then(() => {
    console.log("Sucsess connected database");
  }).catch(err =>{
    console.log(err);
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  });
}

function onStarted() {
  console.info(`Server started on port ${config.port} (${config.env})`);
}

function onError(e) {
  console.error(`ERROR: ${e}`);
}

function onListening() {
  console.info(`Server is listening on port ${config.port}`);
}

