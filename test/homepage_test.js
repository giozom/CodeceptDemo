
Feature('Verify Header Menus on PHP Travel Homepage');

Scenario('Go to PHP travel site and verify navigation menus', (I) => {
    I.amOnPage('http://phptravels.net/');
    I.resizeWindow('maximize');
    I.see('Hotels');
    I.see('Flights');
    I.see('Tours');
    I.see('Cars');
    I.see('Offers');
    I.see('Blog');
    I.see('Featured Hotels');
    I.amOnPage('http://phptravels.net/tours');
    I.seeInTitle('Tours Listings');
    I.amOnPage('http://phptravels.net/hotels');
    I.seeInTitle('Hotels Listing');

});
