'use strict';

let yaml = require('js-yaml');
let fs   = require('fs');
var users = yaml.safeLoad(fs.readFileSync('./conf/webdriverio/users.yaml', 'utf8'));

Feature('Login to PHP');

Scenario.only('Go to PHP travel site', (I) => {
    I.loginAs('demouser');

});


