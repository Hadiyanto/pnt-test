const { expect } = require("chai");

exports.HomePage = class HomePage {
  constructor(driver) {
    this.driver = driver;

    this.textHello = "//android.widget.TextView[@text='Hello,']";
  }

  async validateHomePage() {
    await this.driver.$(this.textHello).isDisplayed();
  }
};
