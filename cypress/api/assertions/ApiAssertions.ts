import Post from '../models/Post';

export default class ApiAssertions {
  static assertStatus(response: Cypress.Response, expectedStatus: number) {
    expect(response.status).to.eq(expectedStatus);
  }

  static assertBodyContains(response: Cypress.Response, property: string) {
    expect(response.body).to.have.property(property);
  }

  static assertBodyEquals<T>(response: Cypress.Response, expectedBody: T) {
    expect(response.body).to.deep.equal(expectedBody);
  }

  static assertBodyPropertyEquals<T>(
    response: Cypress.Response,
    property: string,
    expectedValue: T
  ) {
    expect(response.body[property]).to.deep.equal(expectedValue);
  }
}
