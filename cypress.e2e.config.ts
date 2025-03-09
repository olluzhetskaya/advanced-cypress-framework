import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: 'https://example.cypress.io',
    supportFile: 'cypress/e2e/support/index.ts', // E2E support
    specPattern: 'cypress/e2e/specs/**/*.cy.ts', // E2E specs locations here
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
});