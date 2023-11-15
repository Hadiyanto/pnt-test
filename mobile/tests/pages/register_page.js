const { expect } = require("chai");
const crypto = require("crypto");
const { uniqueNamesGenerator, names } = require("unique-names-generator");

exports.RegisterPage = class RegisterPage {
  constructor(driver) {
    this.driver = driver;

    this.fullNameField = "id=com.loginmodule.learning:id/textInputEditTextName";
    this.emailField = "id=com.loginmodule.learning:id/textInputEditTextEmail";
    this.passwordField =
      "id=com.loginmodule.learning:id/textInputEditTextPassword";
    this.confirmPasswordField =
      "id=com.loginmodule.learning:id/textInputEditTextConfirmPassword";
    this.registerBtn = "id=com.loginmodule.learning:id/appCompatButtonRegister";
    this.errorFullName = "//android.widget.TextView[@text='Enter Full Name']";
    this.errorEmail = "//android.widget.TextView[@text='Enter Valid Email']";
    this.errorPassword = "//android.widget.TextView[@text='Enter Password']";
    this.errorConfirmPassword =
      "//android.widget.TextView[@text='Password Does Not Matches']";
    this.snackBar = "id=com.loginmodule.learning:id/snackbar_text";
  }

  async generateRealName() {
    const config = {
      dictionaries: [names, names],
    };

    return uniqueNamesGenerator(config);
  }

  async register(fullName, email, password, confirmPassword) {
    let randomName =
      fullName == "random" ? await this.generateRealName() : fullName;

    const randomNumber = crypto.randomInt(1000, 9999).toString();

    global.randomEmail =
      email == "random" ? "testing" + randomNumber + "@gmail.com" : email;

    await this.driver.$(this.fullNameField).setValue(randomName);
    await this.driver.$(this.emailField).setValue(randomEmail);
    await this.driver.$(this.passwordField).setValue(password);
    await this.driver.$(this.confirmPasswordField).setValue(confirmPassword);
    await this.driver.$(this.registerBtn).click();
  }

  async validateErrorRequired(field) {
    let errorMsg = "";
    let expectedError = "";
    switch (field) {
      case "full name":
        errorMsg = await this.driver.$(this.errorFullName).getText();
        expectedError = "Enter Full Name";
        break;
      case "email":
        errorMsg = await this.driver.$(this.errorEmail).getText();
        expectedError = "Enter Valid Email";
        break;
      case "password":
        errorMsg = await this.driver.$(this.errorPassword).getText();
        expectedError = "Enter Password";
        break;
      case "confirm password":
        errorMsg = await this.driver.$(this.errorConfirmPassword).getText();
        expectedError = "Password Does Not Matches";
        break;
      case "all":
        errorMsg = await this.driver.$(this.errorFullName).getText();
        expectedError = "Enter Full Name";
        break;
    }
    expect(errorMsg).equal(expectedError);
  }

  async validateSuccessRegister() {
    await this.driver.$(this.snackBar).isDisplayed();
    const snackBarMessage = await this.driver.$(this.snackBar).getText();
    expect(snackBarMessage).equal("Registration Successful");
  }
};
