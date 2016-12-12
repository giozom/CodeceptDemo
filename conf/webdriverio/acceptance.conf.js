let config = {
  tests: "./test/*.js",
  helpers: {
    WebDriverIO: {
      url: 'http://phptravels.net',
      driver: 'direct',
      browser: 'firefox',
      rootElement: 'html',
      coloredLogs: true,
    }
  },
  include: {
    I: "./steps/steps.js",
    loginPage: "./pages/LoginPage.js",
  },
  mocha: {
    reporterOptions: {
      mochaFile: "./reports/webdriverio.xml"
    }
  }
};

if(process.env.NODE_ENV === 'ci') {
    config.helpers.WebDriverIO.url = 'http://phptravels.net';
}

module.exports = config;