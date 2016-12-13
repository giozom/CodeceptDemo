'use strict';
Feature('@wip Book Hotel Accommodation');

Before((I) => {
    I.loginAs('demouser');
});


Scenario('Hotel Booking', (I, bookingPage) => {
    I.amOnPage('http://phptravels.net/hotels');
    I.seeInTitle('Hotels Listings');
    I.fillField(bookingPage.fields.location, 'Rendez');
    I.pressKey('Enter');

});
