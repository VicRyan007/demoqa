class BrowserWindowsPage {
    navigateToAlertsFrameWindows() {
      cy.get('div.card.mt-4.top-card')
        .contains('Alerts, Frame & Windows')
        .click();
    }
  
    clickOnBrowserWindows() {
      cy.contains('li', 'Browser Windows').click();
    }
  
    clickNewWindowButton() {
      cy.get('#windowButton').click();
    }
  
    validateNewWindowContent() {
      cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
          cy.visit(url);
          cy.contains('h1', 'This is a sample page').should('be.visible');
        });
      });
    }
  }
  
  export default BrowserWindowsPage;
  