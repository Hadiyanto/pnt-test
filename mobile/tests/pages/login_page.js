const { expect } = require("chai");

exports.LoginPage = class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.emailField = "id=com.loginmodule.learning:id/textInputEditTextEmail";
    this.passwordField =
      "id=com.loginmodule.learning:id/textInputEditTextPassword";
    this.loginBtn = "id=com.loginmodule.learning:id/appCompatButtonLogin";
    this.linkRegister = "id=com.loginmodule.learning:id/textViewLinkRegister";
    this.alertEmptyRequired =
      "//android.widget.TextView[@text='Enter Valid Email']";
    this.snackBarInvalidLogin = "id=com.loginmodule.learning:id/snackbar_text";
  }

  async login(email, password) {
    await this.driver.$(this.emailField).setValue(email);
    await this.driver.$(this.passwordField).setValue(password);
    await this.driver.$(this.loginBtn).click();
  }

  async validateErrorEmptyRequired() {
    const errorMsg = await this.driver.$(this.alertEmptyRequired).getText();
    expect(errorMsg).equal("Enter Valid Email");
  }

  async validateErrorInvalidEmailOrPassword() {
    await this.driver.$(this.snackBarInvalidLogin).isDisplayed();
    const errorMsg = await this.driver.$(this.snackBarInvalidLogin).getText();
    expect(errorMsg).equal("Wrong Email or Password");
  }

  async validateLoginSuccess() {
    await this.driver.$(this.snackBarInvalidLogin).isDisplayed();
    const errorMsg = await this.driver.$(this.snackBarInvalidLogin).getText();
    expect(errorMsg).equal("Success Login");
  }

  async validateLoginPage() {
    await this.driver.$(this.emailField).isDisplayed();
  }

  async clickRegisterLink() {
    await this.driver.$(this.linkRegister).click();
  }
};
