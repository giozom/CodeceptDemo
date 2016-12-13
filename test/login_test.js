'use strict';

let yaml = require('js-yaml');
let fs   = require('fs');
var users = yaml.safeLoad(fs.readFileSync('./conf/webdriverio/users.yaml', 'utf8'));

Feature('Login and Logout of PHP Travel Site');

Scenario('Login and Logout', (I) => {
    I.loginAs('demouser');
    I.logOut();

});


