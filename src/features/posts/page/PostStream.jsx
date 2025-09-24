import React, { use } from "react";
import PostCard from "../components/PostCard";
import { PostsContext } from "../context/PostsContext";
import Loading from "../../../components/Loading";
import LoadingScreen from "../components/LoadingScreen";

function PostStream() {
  const { posts, isLoading, hasMore, fetchMorePosts, refreshPosts } =
    use(PostsContext);

  // Show a loading indicator for the initial fetch
  if (isLoading && posts.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="container mx-auto">
        <PostCard posts={posts} />

        <div className="mt-5 mr-5 flex justify-end overflow-hidden">
          {hasMore && (
            <button
              onClick={fetchMorePosts}
              disabled={isLoading}
              className="cursor-pointer overflow-hidden rounded-lg border-b-3 border-white bg-gray-800 px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              {isLoading ? "Loading..." : "See More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default PostStream;
