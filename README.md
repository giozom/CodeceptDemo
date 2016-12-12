## A Codecept Example Using PHP Travel Website
#### You will need to install the following:
* [sudo] npm install -g codeceptjs
* [sudo] npm install -g webdriverio

## Install and Start Selenium Webdriver Manager
* npm install -g webdriver-manager
* webdriver-manager update
* webdriver-manager start

## Run the tests
* ~/CodeceptDemo $ <code>npm test</code>
OR
* ~/CodeceptDemo $ <code>codeceptjs run --steps</code>

## WebDriverIO Configuration
* This Codecept Demo is using the WebDriverIO Helper as defined in the Codecept.json file
* Location: <code>~/CodeceptDemo/codecept.json</code>

## Acceptance Test Configuration
* Can have a collection of Page Objects to include when running your acceptance suite
<code>
  include: {
    I: "./steps/steps.js",
    loginPage: "./pages/LoginPage.js",
  },
</code>

## Screenshots
* Screenshots are stored in the **output** folder



