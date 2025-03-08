export default class Post {
  title: string;
  body: string;
  userId: number;
  id?: number;

  constructor(title: string, body: string, userId: number, id?: number) {
    this.title = title;
    this.body = body;
    this.userId = userId;
    if (id) {
      this.id = id;
    }
  }

  static fromResponse(response: Cypress.Response): Post {
    return new Post(
      response.body.title,
      response.body.body,
      response.body.userId,
      response.body.id
    );
  }
}
