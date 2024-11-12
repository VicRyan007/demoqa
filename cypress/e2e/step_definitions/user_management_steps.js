import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.Commands.add("createUser", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/User",
    body: { userName: username, password: password },
  }).as("createUserResponse");
});

Cypress.Commands.add("generateToken", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/GenerateToken",
    body: { userName: username, password: password },
  }).as("tokenResponse");
});

Cypress.Commands.add("authorizeUser", (username, password) => {
  return cy.request({
    method: "POST",
    url: "/Account/v1/Authorized",
    body: { userName: username, password: password },
  }).as("authorizationResponse");
});

Cypress.Commands.add("listBooks", () => {
  return cy.request("/BookStore/v1/Books").as("booksResponse");
});

Cypress.Commands.add("rentBooks", (isbnList, userId, token) => {
  isbnList.forEach(isbn => {
    cy.request({
      method: "POST",
      url: "/BookStore/v1/Books",
      headers: { Authorization: `Bearer ${token}` },
      body: { userId: userId, collectionOfIsbns: [{ isbn: isbn }] },
    }).as("rentBooksResponse");
  });
});

Cypress.Commands.add("getUserDetails", (userId, token) => {
  return cy.request({
    method: "GET",
    url: `/Account/v1/User/${userId}`,
    headers: { Authorization: `Bearer ${token}` },
  }).as("userDetailsResponse");
});

// Step Definitions
Given("a API de criação de usuário está disponível", () => {});

When("eu crio um usuário com {string} e {string}", (username, password) => {
  cy.createUser(username, password);
});

Then("o usuário é criado com sucesso", () => {
  cy.get("@createUserResponse").then(response => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property("userID");
    Cypress.env("userId", response.body.userID);
  });
});

Given("a API de geração de token está disponível", () => {});

When("eu gero um token para o usuário com {string} e {string}", (username, password) => {
  cy.generateToken(username, password);
});

Then("o token é gerado com sucesso", () => {
  cy.get("@tokenResponse").then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("token");
    Cypress.env("token", response.body.token);
  });
});

Given("a API de autorização de usuário está disponível", () => {});

When("eu verifico a autorização do usuário com {string} e {string}", (username, password) => {
  cy.authorizeUser(username, password);
});

Then("o usuário está autorizado", () => {
  cy.get("@authorizationResponse").then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.true;
  });
});

Given("a API de listagem de livros está disponível", () => {});

When("eu obtenho a lista de livros", () => {
  cy.listBooks();
});

Then("a lista de livros é retornada com sucesso", () => {
  cy.get("@booksResponse").then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("books");
  });
});

Given("o usuário está autenticado", () => {});

When("eu alugo os livros com ISBN {string} e {string}", (isbn1, isbn2) => {
  const token = Cypress.env("token");
  const userId = Cypress.env("userId");
  cy.rentBooks([isbn1, isbn2], userId, token);
});

Then("os livros são alugados com sucesso", () => {
  cy.get("@rentBooksResponse").then(response => {
    expect(response.status).to.eq(201);
  });
});

When("eu obtenho os detalhes do usuário", () => {
  const token = Cypress.env("token");
  const userId = Cypress.env("userId");
  cy.getUserDetails(userId, token);
});

Then("os detalhes do usuário incluem os livros alugados", () => {
  cy.get("@userDetailsResponse").then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("books");
    expect(response.body.books).to.have.length(2);
  });
});
