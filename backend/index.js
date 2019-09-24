
// const winston = require('winston');
const config = require('config');
//
const express = require('express');
const app = express();
//
//const auth=require('./routes/auth');
//
require('./startup/routes')(app);
require('./startup/Database')();
require('./startup/validation')();
require('./startup/prod')(app);
if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
  }

/// PORTS 
const port = process.env.PORT || 3000;
// app.listen(port, () => winston.info(`Listening on port ${port}...`));
const server = app.listen(port, () => console.log(`Listening on port ${port} ... `));

module.exports = server;