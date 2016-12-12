'use strict';

let I;

module.exports = {

    _init() {
        I = require('./steps/steps.js')();
    },


    fields: {
        emailInput: '//input[@name="username"]',
        passwordInput: '//input[@name="password"]'
    },

    checkbox: {
        rememberMe: '//label[contains(.,"Remember Me")]'
    },

    button: {
      loginButton: '//button[contains(.,'Login')]'
    },

    links: {
        signUp: '.left>a',
        forgetPassword: '.right>a'
    }

};

