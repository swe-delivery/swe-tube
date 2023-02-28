const { describe, expect, it } = require("@jest/globals");
const request = require("supertest");

describe("GET /", () => {
  beforeEach(() => {
    req = request("http://localhost:9999/.netlify/functions")
      .get("/resources")
      .set("Accept", "application/json");
  });

  it("succeeds", (done) => {
    req.end((err, { statusCode }) => {
      if (err) {
        throw err;
      }

      expect(statusCode).toBe(200);
      done();
    });
  });

  it("responds with 'application/json'", (done) => {
    req.end((err, { headers }) => {
      if (err) {
        throw err;
      }

      expect(headers["content-type"]).toContain("application/json");
      done();
    });
  });

  it("responds with an collection of resources", (done) => {
    req.end((err, { text }) => {
      if (err) {
        throw err;
      }

      const resources = JSON.parse(text);

      expect(Array.isArray(resources)).toBe(true);
      expect(resources.every(({ id, type }) => id && type === "resource"));
      done();
    });
  });
});
