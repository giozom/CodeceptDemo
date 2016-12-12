
Feature('Verify Header Menus on PHP Travel Homepage');

Scenario('Go to PHP travel site', (I) => {
    I.amOnPage('http://phptravels.net/');
    I.see('Featured Hotels');
});

Scenario('Verify Header', (I) => {
    I.amOnPage('http://phptravels.net/flightsw');
    I.seeInTitle('Flights');
    I.amOnPage('http://phptravels.net/tours');
    I.seeInTitle('Tours Listings');
    I.click({css: '//a[contains(.,"Cars")]'});
    I.seeInTitle('Cars Listings');
    I.amOnPage('http://phptravels.net/offers');
    I.seeInTitle('Special Offers');

});
