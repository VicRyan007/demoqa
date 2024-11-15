class PracticeFormPage {
    visit() {
      cy.visit('https://demoqa.com/');
    }
  
    navigateToForm() {
      cy.contains('Forms').click();
      cy.contains('Practice Form').click();
    }
  
    fillForm() {
      cy.get('#firstName').type('João');
      cy.get('#lastName').type('Silva');
      cy.get('#userEmail').type('joao.silva@example.com');
      cy.get('#gender-radio-1').check({ force: true });
      cy.get('#userNumber').type('1234567890');
      cy.get('#dateOfBirthInput').click().then(() => {
        cy.get('.react-datepicker__month-select').select('January');
        cy.get('.react-datepicker__year-select').select('2000');
        cy.get('.react-datepicker__day--001').first().click();
      });
      cy.get('#subjectsInput').type('Math{enter}');
      cy.get('#hobbies-checkbox-1').check({ force: true });
      cy.get('#uploadPicture').attachFile('example.txt');
      cy.get('#currentAddress').type('Rua Exemplo, 123');
      cy.get('#state').click().find('div').contains('NCR').click();
      cy.get('#city').click().find('div').contains('Delhi').click();
    }
  
    submitForm() {
      cy.get('#submit').click();
    }
  
    verifyModal() {
      cy.get('.modal-content').should('be.visible');
      cy.wait(4000); // Espera de 4 segundos antes de fechar o modal
      cy.get('#closeLargeModal').click({ force: true });
    }
  }
  
  export default new PracticeFormPage();
  