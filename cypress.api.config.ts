import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jsonplaceholder.typicode.com',
    supportFile: 'cypress/api/support/commands.ts', // API support
    specPattern: 'cypress/api/specs/**/*.cy.ts', // API specs location
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});