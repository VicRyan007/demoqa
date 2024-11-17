import BrowserWindowsPage from '../../page_objects/Browser_windows.page';

const browserWindowsPage = new BrowserWindowsPage();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Testando nova janela', () => {
  it('Deve abrir uma nova janela e validar o conteúdo', () => {
    cy.visit('https://demoqa.com/');
    browserWindowsPage.navigateToAlertsFrameWindows();
    browserWindowsPage.clickOnBrowserWindows();
    browserWindowsPage.clickNewWindowButton();
    browserWindowsPage.validateNewWindowContent();
  });
});
