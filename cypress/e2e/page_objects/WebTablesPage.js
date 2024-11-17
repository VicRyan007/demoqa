class WebTablesPage {
    navigateToElements() {
      cy.get('.card.mt-4.top-card')
        .contains('Elements')
        .click();
    }
  
    navigateToWebTables() {
      cy.contains('li', 'Web Tables').click();
    }
  
    addNewRecord(data) {
      cy.contains('Add').click();
      cy.get('#firstName').type(data.firstName);
      cy.get('#lastName').type(data.lastName);
      cy.get('#userEmail').type(data.email);
      cy.get('#age').type(data.age);
      cy.get('#salary').type(data.salary);
      cy.get('#department').type(data.department);
      cy.get('#submit').click();
    }
  
    editRecord(recordId, data) {
      cy.get(`#edit-record-${recordId}`).click({force:true});
      cy.get('#firstName').clear().type(data.firstName);
      cy.get('#lastName').clear().type(data.lastName);
      cy.get('#userEmail').clear().type(data.email);
      cy.get('#age').clear().type(data.age);
      cy.get('#salary').clear().type(data.salary);
      cy.get('#department').clear().type(data.department);
      cy.get('#submit').click();
    }
  
    deleteRecord(recordId) {
      cy.get(`#delete-record-${recordId}`).click();
    }
  }
  
  export default WebTablesPage;
  