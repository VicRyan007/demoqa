class WidgetsPage {
    visitWidgetsPage() {
        cy.visit('https://demoqa.com/');
        cy.contains('Widgets').click();
        cy.contains('Progress Bar').click();
    }

    startProgressBar() {
        cy.get('#startStopButton').click();
    }

    /* Nesta função, o ponto de parada é o 24 porque o carregamento da barra é muito rápido, 
    então se fez necessário parar em um valor antes do esperado para que a barra parasse exatamente em 25%*/
    stopProgressBarAt25() {
        cy.get('#progressBar > .progress-bar')
            .invoke('attr', 'aria-valuenow')
            .then((value) => {
                const progressValue = parseInt(value);
                if (progressValue < 24) {
                    cy.wait(10); 
                    this.stopProgressBarAt25();
                } else if (progressValue === 24) { 
                    cy.get('#startStopButton').click(); 
                    cy.wait(3000)
                } else {
                    cy.get('#startStopButton').click(); 
                }
            });
    }

    validateProgressBar() {
        cy.get('#progressBar > .progress-bar')
            .invoke('attr', 'aria-valuenow')
            .then((value) => {
                const progressValue = parseInt(value);
                expect(progressValue).to.equal(25);
            });
    }

    waitForProgressToComplete() {
        cy.get('#progressBar > .progress-bar')
            .invoke('attr', 'aria-valuenow')
            .then((value) => {
                const progressValue = parseInt(value);
                if (progressValue < 100) {
                    cy.wait(1500);
                    this.waitForProgressToComplete();
                } else {
                    expect(progressValue).to.equal(100);
                }
            });
    }

    resetProgressBar() {
        cy.get('#resetButton', { timeout: 10000 })
            .should('be.visible')
            .click();
    }
}

export default new WidgetsPage();
