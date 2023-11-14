const supertest = require("supertest");

exports.API = class API {
  async performGetRequest(path) {
    const request = supertest(host);
    try {
      const response = await request.get(path);
      global.response = response;
      console.log("Response:", response.body);
    } catch (error) {
      console.error("GET Request Failed:", error);
      throw error;
    }
  }

  async performPostRequest(path, postData) {
    try {
      const request = supertest(host);
      const response = await request.post(path).send(postData);
      global.response = response;
      console.log("Response:", response.body);
    } catch (error) {
      console.error("POST Request Failed:", error);
      throw error;
    }
  }
};
