import BaseService from './BaseService';
import Post from '../models/Post';

export default class PostService extends BaseService {
  fetchUsers() {
    return this.get<Post[]>('/users');
  }

  createPost(post: Post) {
    return this.post<Post>('/posts', post);
  }
}
