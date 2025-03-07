import BasePage from './BasePage';

export default class HomePage extends BasePage {
  private get titleSelector() {
    return 'h1';
  }

  private get postButtonSelector() {
    return 'button#create-post';
  }

  private get homeListSelector() {
    return '.home-list a';
  }

  constructor() {
    super();
  }

  async getTitleText(): Promise<string> {
    return cy.get(this.titleSelector).invoke('text');
  }

  async clickPostButton(): Promise<void> {
    await cy.get(this.postButtonSelector).click();
  }

  async verifyTitle(expectedTitle: string): Promise<void> {
    const titleText = await this.getTitleText();
    expect(titleText).to.eq(expectedTitle);
  }

  clickOnCommandsLink() {
    cy.contains(this.homeListSelector, 'Querying').should('be.visible').click();
  }

  assertCommandsLinkVisible() {
    cy.contains(this.homeListSelector, 'Querying').should('be.visible');
  }

  clickFirstElementWithText(text: string) {
    cy.contains(this.homeListSelector, text).should('be.visible').first().click();
  }

  clickElementWithText(text: string) {
    cy.contains(this.homeListSelector, text).should('be.visible').click();
  }
}