describe("Gerenciamento de Usuário na Book Store", () => {
  const username = `User_${Math.random().toString(36).substring(2, 10)}`;
  const password = "Password@123";

  it("Criação de um usuário", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/User",
      body: { userName: username, password: password },
      log: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userID");
      Cypress.env("userId", response.body.userID);
      cy.task("logToTerminal", `Usuário criado: ${username}`);
      cy.task("logToTerminal", `ID do usuário: ${response.body.userID}`);
    });
  });

  it("Geração de um token de acesso", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/GenerateToken",
      body: { userName: username, password: password },
      log: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      Cypress.env("token", response.body.token);
      cy.task("logToTerminal", `Token de acesso gerado: ${response.body.token}`);
    });
  });

  it("Confirmação de autorização do usuário", () => {
    cy.request({
      method: "POST",
      url: "/Account/v1/Authorized",
      body: { userName: username, password: password },
      log: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.true;
      cy.task("logToTerminal", `Usuário autorizado: ${username}`);
    });
  });

  it("Listagem de livros disponíveis", () => {
    cy.request({
      method: "GET",
      url: "/BookStore/v1/Books",
      log: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("books");
      const books = response.body.books;
      cy.task("logToTerminal", "Livros disponíveis:");
      books.forEach((book) => {
        cy.task("logToTerminal", `- ${book.title} (ISBN: ${book.isbn})`);
      });
      Cypress.env("books", books);
    });
  });

  it("Aluguel de dois livros", () => {
    const token = Cypress.env("token");
    const userId = Cypress.env("userId");
    const books = Cypress.env("books");
    const selectedBooks = Cypress._.sampleSize(books, 2);
    Cypress.env("selectedBooks", selectedBooks);

    cy.task("logToTerminal", "Detalhes dos livros selecionados para aluguel:");
    selectedBooks.forEach((book) => {
      cy.task("logToTerminal", `Título: ${book.title}`);
      cy.task("logToTerminal", `ISBN: ${book.isbn}`);
      cy.task("logToTerminal", `Autor: ${book.author}`);
      cy.task("logToTerminal", `Publicação: ${book.publish_date}`);
      cy.task("logToTerminal", `Editora: ${book.publisher}`);
      cy.task("logToTerminal", `Páginas: ${book.pages}`);
      cy.task("logToTerminal", `Descrição: ${book.description}`);
      cy.task("logToTerminal", `Website: ${book.website}`);
    });

    selectedBooks.forEach((book) => {
      cy.request({
        method: "POST",
        url: "/BookStore/v1/Books",
        headers: { Authorization: `Bearer ${token}` },
        body: { userId: userId, collectionOfIsbns: [{ isbn: book.isbn }] },
        log: false,
      }).then((response) => {
        expect(response.status).to.eq(201);
        cy.task("logToTerminal", `Livro alugado com sucesso: ISBN ${book.isbn}`);
      });
    });
  });

  it("Verificação dos detalhes do usuário com livros alugados", () => {
    const token = Cypress.env("token");
    const userId = Cypress.env("userId");

    cy.request({
      method: "GET",
      url: `/Account/v1/User/${userId}`,
      headers: { Authorization: `Bearer ${token}` },
      log: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("books");

      cy.task("logToTerminal", "Informações do Usuário:");
      cy.task("logToTerminal", `ID do Usuário: ${response.body.userId}`);
      cy.task("logToTerminal", `Nome de Usuário: ${response.body.username}`);

      const selectedBooks = Cypress.env("selectedBooks");
      const rentedBookIsbns = selectedBooks.map((book) => book.isbn);
      expect(response.body.books.map(book => book.isbn)).to.include.members(rentedBookIsbns);

      cy.task("logToTerminal", "Livros Alugados:");
      response.body.books.forEach((book) => {
        cy.task("logToTerminal", `Título: ${book.title}`);
        cy.task("logToTerminal", `ISBN: ${book.isbn}`);
        cy.task("logToTerminal", `Autor: ${book.author}`);
        cy.task("logToTerminal", `Publicação: ${book.publish_date}`);
        cy.task("logToTerminal", `Editora: ${book.publisher}`);
        cy.task("logToTerminal", `Páginas: ${book.pages}`);
        cy.task("logToTerminal", `Descrição: ${book.description}`);
        cy.task("logToTerminal", `Website: ${book.website}`);
      });
    });
  });
});
