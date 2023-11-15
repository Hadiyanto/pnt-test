// cucumber.conf.js file

const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { remote } = require("webdriverio");
const { LoginPage } = require("./tests/pages/login_page.js");
const { RegisterPage } = require("./tests/pages/register_page.js");
const { HomePage } = require("./tests/pages/home_page.js");

setDefaultTimeout(36000);

Before(async function() {
  const capabilities = {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Android",
    "appium:app":
      "/Users/hadiyanto/Downloads/Sample Android App - Login Tes_4.0_Apkpure.apk",
    "appium:deviceName": "emulator-5554",
    "appium:newCommandTimeout": 3600,
  };

  const wdOpts = {
    hostname: "127.0.0.1",
    port: 4723,
    capabilities,
  };
  global.driver = await remote(wdOpts);
  global.loginPage = new LoginPage(global.driver);
  global.registerPage = new RegisterPage(global.driver);
  global.homePage = new HomePage(global.driver);
});

After(async function() {
  await driver.deleteSession();
});
