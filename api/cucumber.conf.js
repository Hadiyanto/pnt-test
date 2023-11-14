// cucumber.conf.js file

const { Before } = require("@cucumber/cucumber");
const { API } = require("./tests/common/api.js");

Before(async function() {
  global.api = new API();
  global.host = "https://jsonplaceholder.typicode.com";
});
