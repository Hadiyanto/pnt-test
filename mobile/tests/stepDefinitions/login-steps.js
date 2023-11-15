const { Given, When, Then, And } = require("@cucumber/cucumber");

Given("user login with email {string} and password {string}", async function(
  email,
  password
) {
  await loginPage.login(email, password);
});

Given("user login with previous registered email", async function() {
  await driver.back();
  await loginPage.login(randomEmail, "Welcome123");
});

Then("validate user success login", async function() {
  await homePage.validateHomePage();
});

Then(
  "validate error message invalid email or password is displayed",
  async function() {
    await loginPage.validateErrorInvalidEmailOrPassword();
  }
);

Then("validate error message empty required is displayed", async function() {
  await loginPage.validateErrorEmptyRequired();
});

Then("user on login page", async function() {
  await loginPage.validateLoginPage();
});

Then("user go to register page", async function() {
  await loginPage.clickRegisterLink();
});
