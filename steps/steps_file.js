
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({


      loginAs: function (name) {
          this.amOnPage('http://phptravels.net/login');
          this.resizeWindow('maximize');
          this.clearCookie();
          this.seeInTitle('Login');
          //this.fillField('//input[@name="username"]', users[name].username);
          this.fillField('//input[@name="username"]', 'user@phptravels.com');
          //this.fillField('//input[@name="username"]', users[name].username);
          this.fillField('//input[@name="password"]', 'demouser');
          this.pressKey('Enter');
          this.wait(2);
          this.click("Login");
          this.seeInCurrentUrl('/account/');
          this.see('John');
      },

  });
}
