/* eslint-disable global-require, import/no-dynamic-require */

// Load .env in local development
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ silent: true });
}

const common = require('./components/common');
const logger = require('./components/logger');
const server = require('./components/server');

module.exports = Object.assign({}, common, logger, server);
