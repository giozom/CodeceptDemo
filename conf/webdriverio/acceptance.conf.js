let config = {
    tests: "./test/*_test.js",
    timeout: 10000,
    output: "./output",
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
        I: "./steps/steps_file.js",
        loginPage: "./pages/LoginPage.js",
        bookingPage: "./pages/BookingPage.js"
    },
    mocha: {
        reporterOptions: {
            mochaFile: "./reports/results.xml"
        }
    }
};



module.exports = config;