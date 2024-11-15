import PracticeFormPage from '../../page_objects/PracticeFormPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Formulário de Registro', () => {
  it('Preenche o formulário de prática com dados aleatórios', () => {
    PracticeFormPage.visit();
    PracticeFormPage.navigateToForm();
    PracticeFormPage.fillForm();
    PracticeFormPage.submitForm();
    PracticeFormPage.verifyModal();
  });
});
