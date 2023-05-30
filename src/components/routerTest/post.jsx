const Post = ({ match, posts }) => {
  const postId = match.params.postId;
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const post = getPostById(postId);
  return <h2>{post ? post.label : "Post not found"}</h2>;
};

export default Post;
