import React from "react";
import { useRouter } from "next/router";
import Post from "../../components/Post/Post";
function PostPage() {
  const router = useRouter();
  const { post } = router.query;
  return (
    <div>
      <Post />
    </div>
  );
}

export default PostPage;
