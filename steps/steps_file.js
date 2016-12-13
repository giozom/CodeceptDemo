
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({


      loginAs: function (name) {
          this.amOnPage('http://phptravels.net/login');
          this.resizeWindow('maximize');
          this.clearCookie();
          this.seeInTitle('Login');

          /* Comment: Using users in yaml. Enable this if reading from users.yaml file
          //this.fillField('//input[@name="username"]', users[name].username);
          //this.fillField('//input[@name="username"]', users[name].username);
          */

          this.fillField('//input[@name="username"]', 'user@phptravels.com');
          this.fillField('//input[@name="password"]', 'demouser');
          this.pressKey('Enter');
          this.wait(3);
          this.seeCurrentUrlEquals('http://phptravels.net/account/');
          this.seeInTitle('My Account');
          this.see('Hi, John Smith');
      },

      logOut: function () {
          this.amOnPage('http://phptravels.net/account/logout/')
      }

  });
}
