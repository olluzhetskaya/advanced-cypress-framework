import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io',
    supportFile: 'cypress/e2e/support/commands.ts', // E2E support
    specPattern: 'cypress/e2e/specs/**/*.cy.ts', // E2E specs locations here
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});