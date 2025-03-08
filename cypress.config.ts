import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listener
      supportFile: "cypress/support/ui/commands.ts", // E2E support
      specPattern: "cypress/e2e/specs/**/*.spec.ts",  // E2E specs locations here
    },
    baseUrl: 'https://example.cypress.io',
    integration: {
      supportFile: "cypress/support/api/commands.ts", // API support
      specPattern: "cypress/api/specs/**/*.spec.ts",  // API specs location
    },
    supportFile: 'cypress/support/index.ts',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});