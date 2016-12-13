'use strict';
Feature('Book Hotel Accommodation');

Before((I) => {
    I.loginAs('demouser');
});


Scenario('Hotel Booking', (I, bookingPage) => {
    I.amOnPage('http://phptravels.net/hotels');
    I.seeInTitle('Hotels Listings');
    I.fillField(bookingPage.fields.location, 'Rendezvous ');
    I.wait(5);
    I.waitForElement('//span[contains(.,"Rendezvous Hotels")]');
    I.click('Rendezvous Hotels');
    I.click('Search');
    I.waitForText('Rendezvous Hotels');
});
