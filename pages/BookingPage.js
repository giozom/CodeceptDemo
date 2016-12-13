'use strict';

let I, bookingPage;

module.exports = {

    _init() {
        //I = require('../steps/steps_file.js')();
        I = actor();
    },

    searchBox: '.searchbox',

    buttons: {
        searchButton: 'html/body/div[5]/div[2]/div/div[2]/form/div[6]/div/button'
    },

    fields: {
        location: '[uib-typeahead]',
        checkInDate: '//input[@name="checkin"]',
        checkOutDate: '//input[@name="checkout"]'
    },

    dropdowns: {
        adults: '#adults',
        child: '#child'
    }

};

