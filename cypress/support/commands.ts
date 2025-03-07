// Add custom commands here
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('input[name=username]').type(username);
  cy.get('input[name=password]').type(password);
  cy.get('button[type=submit]').click();
});