import PostBuilder from '../builders/PostBuilder';

export const predefinedPost = new PostBuilder()
  .setTitle('foo')
  .setBody('bar')
  .setUserId(1)
  .setId(101)
  .build();

// imagine it's very big and complex object
