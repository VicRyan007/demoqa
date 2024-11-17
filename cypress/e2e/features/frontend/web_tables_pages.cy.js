import WebTablesPage from '../../page_objects/WebTablesPage';

const webTablesPage = new WebTablesPage();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Testando Web Tables', () => {
  it('Adiciona, edita e exclui registros na tabela', () => {
    cy.visit('https://demoqa.com/');

    
    webTablesPage.navigateToElements();
    webTablesPage.navigateToWebTables();

    
    const newData = {
      firstName: 'João',
      lastName: 'Silva',
      email: 'joao.silva@example.com',
      age: '30',
      salary: '50000',
      department: 'Engineering',
    };
    webTablesPage.addNewRecord(newData);


    const updatedData = {
      firstName: 'Carlos',
      lastName: 'Almeida',
      email: 'carlos.almeida@example.com',
      age: '35',
      salary: '60000',
      department: 'Management',
    };
    webTablesPage.editRecord(3, updatedData);


    webTablesPage.deleteRecord(2);
  });
});
