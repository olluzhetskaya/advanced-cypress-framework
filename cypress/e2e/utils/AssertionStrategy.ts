export interface AssertionStrategy {
  assert(element: Cypress.Chainable, expected: string): void;
}

export class TextAssertionStrategy implements AssertionStrategy {
  assert(element: Cypress.Chainable, expected: string) {
    element.should('have.text', expected);
  }
}

export class VisibilityAssertionStrategy implements AssertionStrategy {
  assert(element: Cypress.Chainable, expected: string) {
    element.should('be.visible');
  }
}