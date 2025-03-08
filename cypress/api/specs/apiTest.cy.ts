import PostService from '../services/PostService';
import ApiAssertions from '../assertions/ApiAssertions';
import { predefinedPost } from '../data/PredefinedObjects';

describe('API Tests', () => {
  const postService = new PostService();

  it('should fetch users', () => {
    postService.fetchUsers().then((response) => {
      ApiAssertions.assertStatus(response, 200);
      // Add more assertions as needed
    });
  });

  it('should create a new post and validate full body', () => {
    postService.createPost(predefinedPost).then((response) => {
      ApiAssertions.assertStatus(response, 201);
      ApiAssertions.assertBodyContains(response, 'id');
      ApiAssertions.assertBodyEquals(response, {
        ...predefinedPost,
        id: response.body.id,
      });
    });
  });
});
