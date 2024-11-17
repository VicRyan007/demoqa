import SortablePage from '../../page_objects/SortablePage';

describe('Teste de ordenação', () => {
    it('Ordenando lista em ordem crescente', () => {
        cy.visit('https://demoqa.com/');
        cy.contains('Interactions').click();
        cy.contains('Sortable').click();
        cy.get('#demo-tab-list').click();
        SortablePage.sortList();
        cy.wait(4000)
    });

    it('Ordenando grid em ordem crescente', () => {
        cy.visit('https://demoqa.com/');
        cy.contains('Interactions').click();
        cy.contains('Sortable').click();
        cy.get('#demo-tab-grid').click();
        SortablePage.sortGrid();
        cy.wait(4000)
    });
});
