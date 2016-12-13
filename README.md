## A Codecept Example Using PHP Travel Website
#### You will need to install the following:
* [sudo] npm install -g codeceptjs
* [sudo] npm install -g webdriverio

## Install and Start Selenium Webdriver Manager
* npm install -g webdriver-manager
* webdriver-manager update
* webdriver-manager start

## Run the tests (defined in package.json)
* ~/CodeceptDemo $ <code>npm test</code>
OR
* ~/CodeceptDemo $ <code>codeceptjs run --steps</code>

## Skipping Scenario
* Add **.skip** flag to a scenario you wish to skip
* i.e. _Scenario.skip_

## Running Specific Scenario
* Add **.only** flag to a scenario you wish to run
* i.e. _Scenario.only_

## Running Specific Feature
* You can add a '@wip' tag to a feature you only want to run.
* For example:
```javascript
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

```
.. Notice the '@wip' tag in the feature
.. To run this feature only <code>npm run test:wip</code>

## WebDriverIO Helper
* This Codecept Demo is using the WebDriverIO Helper as defined in the Codecept.json file
* Location: <code>~/CodeceptDemo/codecept.json</code>

## Acceptance Test Configuration
* Can have a collection of Page Objects to include when running your acceptance suite
* See **loginPage** example <code>~/CodeceptDemo/conf/webdriverio/acceptance.conf.js</code>

## Screenshots
* Screenshots are stored in the **output** folder

## More About Codeceptjs
* Go to Codecept.io - http://codecept.io/quickstart/#setup
