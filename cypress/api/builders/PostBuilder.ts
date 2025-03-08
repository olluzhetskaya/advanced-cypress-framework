import Post from '../models/Post';

export default class PostBuilder {
  private title: string;
  private body: string;
  private userId: number;
  private id?: number;

  constructor() {
    // Set default values if needed
    this.title = 'Default Title';
    this.body = 'Default Body';
    this.userId = 1;
  }

  setTitle(title: string): PostBuilder {
    this.title = title;
    return this;
  }

  setBody(body: string): PostBuilder {
    this.body = body;
    return this;
  }

  setUserId(userId: number): PostBuilder {
    this.userId = userId;
    return this;
  }

  setId(id: number): PostBuilder {
    this.id = id;
    return this;
  }

  build(): Post {
    return new Post(this.title, this.body, this.userId, this.id);
  }
}
