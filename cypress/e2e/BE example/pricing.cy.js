let basePath = "http://cardif-preview:30340/gateway-server";
let token;

describe("Pricing test", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: basePath + "/api/v1/check24/auth/oauth/token",
      auth: {
        username: "Check24",
        password: "Check24",
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        grant_type: "on_behalf",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      token = res.body.access_token;
      console.log(token);
    });
  });

  it("Pricing check", () => {
    cy.request({
      method: "GET",
      url: basePath + "/api/v1/check24/products",
      auth: {
        bearer: token,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
    });
  });
});
