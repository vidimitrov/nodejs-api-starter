'use strict';

function getApiStatus (ctx) {
  ctx.body = 'Everything is up and running...';
  ctx.status = 200;
}

module.exports = getApiStatus;
