import HomePage from '../../pages/HomePage';

describe('Home Page Tests', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.navigate();
  });

  it('should display the commands link', () => {
    homePage.assertCommandsLinkVisible();
  });

  it('should navigate to the commands page when the link is clicked', () => {
    homePage.clickOnCommandsLink();
    homePage.assertElementContainsText('h1', 'Querying');
  });
});