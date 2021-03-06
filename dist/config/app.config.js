'use strict';

/*
 This file is one to configure server
*/

var appEnv = process.env.NODE_ENV || 'development';
var appName = 'test';

var server = {
  production: {
    schema: 'https',
    host: process.env.HOST || '',
    port: process.env.PORT || '3002',
    cert: '',
    cert_key: ''
  },
  staging: {
    schema: 'https',
    host: process.env.HOST || '',
    port: process.env.PORT || '3003',
    cert: '',
    cert_key: ''
  },
  development: {
    schema: 'http',
    host: 'localhost',
    port: '3002',
    cert: '',
    cert_key: ''
  }
};

var port = server[appEnv].port;
var rootUrl = server[appEnv].schema + '://' + server[appEnv].host + ':' + port;

module.exports = {
  APP_ENV: appEnv,
  APP_NAME: appName,
  SERVER: server[appEnv],
  ROOT_URL: rootUrl
};
//# sourceMappingURL=app.config.js.map