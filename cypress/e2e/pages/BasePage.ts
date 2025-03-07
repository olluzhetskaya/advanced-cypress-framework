import { Locator } from 'cypress';

const DEFAULT_URL = 'https://example.cypress.io';

export default class BasePage {
  protected url: string;

  constructor(url: string = DEFAULT_URL) {
    this.url = url;
  }

  navigate() {
    cy.visit(this.url);
  }

  getElement(selector: string): Locator {
    return cy.get(selector);
  }

  clickElement(selector: string) {
    this.getElement(selector).first().click();
  }

  typeInElement(selector: string, text: string) {
    this.getElement(selector).type(text);
  }

  assertElementVisible(selector: string) {
    this.getElement(selector).should('be.visible');
  }

  assertElementContainsText(selector: string, text: string) {
    this.getElement(selector).should('contain.text', text);
  }
}