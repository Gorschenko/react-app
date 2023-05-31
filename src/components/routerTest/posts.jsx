import PostsList from "components/postsList";
import Post from "components/post";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const postId = params.postId;
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  return postId ? (
    <Post posts={posts} id={postId} />
  ) : (
    <PostsList posts={posts} />
  );
};

export default Posts;
