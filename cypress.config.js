const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        logToTerminal(message) {
          console.log(message);
          return null;
        },
      });
      return config;
    },
    baseUrl: "https://demoqa.com",
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
