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
