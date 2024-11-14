Cypress.Commands.add("createUser", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/User",
    body: { userName: username, password: password },
  });
});

Cypress.Commands.add("generateToken", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/GenerateToken",
    body: { userName: username, password: password },
  });
});

Cypress.Commands.add("authorizeUser", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/Authorized",
    body: { userName: username, password: password },
  });
});

Cypress.Commands.add("listBooks", () => {
  return cy.request("/BookStore/v1/Books");
});

Cypress.Commands.add("rentBook", (isbn, userId, token) => {
  return cy.request({
    method: "POST",
    url: "/BookStore/v1/Books",
    headers: { Authorization: `Bearer ${token}` },
    body: { userId: userId, collectionOfIsbns: [{ isbn: isbn }] },
  });
});

Cypress.Commands.add("getUserDetails", (userId, token) => {
  return cy.request({
    method: "GET",
    url: `/Account/v1/User/${userId}`,
    headers: { Authorization: `Bearer ${token}` },
  });
});
