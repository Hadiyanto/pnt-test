const { Given, When, Then } = require("@cucumber/cucumber");

Given("user register with valid data", async function() {
  const fullName = "";
  const email = "";
  const password = "Welcome123";
  const confirmPassword = "Welcome123";
  await registerPage.register("random", "random", password, confirmPassword);
});

Then(
  "user register with full name {string}, email {string}, password {string} and confirm password {string}",
  async function(fullName, email, password, confirmPassword) {
    await registerPage.register(fullName, email, password, confirmPassword);
  }
);

Then("validate user success register", async function() {
  await registerPage.validateSuccessRegister();
});

Then("validate error message {string} is displayed", async function(field) {
  await registerPage.validateErrorRequired(field);
});
