const { Given, When, Then, And } = require("@cucumber/cucumber");
const { expect } = require("chai");

Given("user send GET request to {string}", async function(path) {
  await console.log("GET Request");
  await api.performGetRequest(path);
});

Given("user send POST request to {string} with body {}", async function(
  path,
  body
) {
  await console.log("POST Request");
  let postBody;
  if (body == '"default"') {
    postBody = {
      title: "recommendation",
      body: "motorcycle",
      userId: 12,
    };
  } else {
    postBody = body;
  }
  await api.performPostRequest(path, postBody);
});

Then("user validate response code is {int}", async function(value) {
  await expect(response.status).equal(value);
});

Then("type of value response body {string} should be {string}", async function(
  expected_key,
  expected_value
) {
  response.body.forEach(function(value) {
    let value_int = expected_value == "integer" ? "number" : "integer";
    console.log(value);
    switch (expected_key) {
      case "userId":
        expect(typeof value["userId"]).equal(value_int);
        break;
      case "id":
        expect(typeof value["id"]).equal(value_int);
        break;
      case "title":
        expect(typeof value["title"]).equal(expected_value);
        break;
      case "body":
        expect(typeof value["body"]).equal(expected_value);
        break;
    }
  });
});

Then("value of response body {string} should be {string}", async function(
  expected_key,
  expected_value
) {
  if (typeof response.body[expected_key] == "string") {
    expect(response.body[expected_key]).equal(expected_value);
  } else if (typeof response.body[expected_key] == "number") {
    expect(response.body[expected_key]).equal(parseInt(expected_value));
  }
});
