import WidgetsPage from '../../page_objects/ProgressBarPage';

describe('Teste do Progress Bar', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Valida a barra de progresso e faz o reset', () => {
        WidgetsPage.visitWidgetsPage();
        WidgetsPage.startProgressBar();
        WidgetsPage.stopProgressBarAt25();
        WidgetsPage.validateProgressBar();
        WidgetsPage.startProgressBar();
        WidgetsPage.waitForProgressToComplete();
        WidgetsPage.resetProgressBar();
    });
});
