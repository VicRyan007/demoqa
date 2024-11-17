import './commands';
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Script error')) {
        return false; 
    }
    return false;
});
