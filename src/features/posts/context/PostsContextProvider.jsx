import { useState, useEffect, useCallback } from "react";
import { PostsContext } from "./PostsContext";
import * as postsService from "../../../services/postsService";

function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [nextCursor, setNextCursor] = useState(null);

  const fetchPosts = useCallback(async (cursor, sync = false) => {
    setIsLoading(true);

    try {
      const data = await postsService.getPosts({ cursor }); // This still needs to be awaited for the state updates below
      // Append new posts to the existing list or reset
      if (sync) {
        setPosts(data.posts);
      } else {
        // On initial load (cursor is null) or "fetch more", append/set posts
        setPosts((prevPosts) =>
          cursor ? [...prevPosts, ...data.posts] : data.posts,
        );
      }
      setHasMore(data.hasMore);
      setNextCursor(data.nextCursor);
      return data; // Explicitly return the data
    } catch (error) {
      // In a real app, you'd want to show an error to the user
      console.error("Error fetching posts:", error);
      setHasMore(false);
      throw error; // Re-throw the error so await can catch it if needed
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch initial posts on component mount
  useEffect(() => {
    fetchPosts(null);
  }, [fetchPosts]);

  // sync posts on manual refresh or on a new post creation
  const refreshPosts = () => {
    return fetchPosts(null, true);
  };

  const fetchMorePosts = () => {
    if (!isLoading && hasMore) {
      fetchPosts(nextCursor);
    }
  };

  const value = { posts, isLoading, hasMore, fetchMorePosts, refreshPosts };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}

export default PostsContextProvider;
