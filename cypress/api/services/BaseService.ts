export default class BaseService {
  protected baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || Cypress.config().baseUrl;
  }

  protected get<T>(endpoint: string) {
    return cy.request<T>(`${this.baseUrl}${endpoint}`);
  }

  protected post<T>(endpoint: string, body: T) {
    return cy.request('POST', `${this.baseUrl}${endpoint}`, body);
  }

  protected put<T>(endpoint: string, body: T) {
    return cy.request('PUT', `${this.baseUrl}${endpoint}`, body);
  }

  protected delete(endpoint: string) {
    return cy.request('DELETE', `${this.baseUrl}${endpoint}`);
  }
}
