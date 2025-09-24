import { createContext } from "react";

export const PostsContext = createContext({
  posts: [],
  isLoading: true,
  hasMore: false,
  fetchMorePosts: () => {},
  refreshPosts: () => {},
});
