import { useReducer } from "react";
import { PostsContext } from "./PostsContext";
import postsReducer from "./postReducer";

function PostsContextProvider({ children }) {
  const [posts, dispatchPosts] = useReducer(postsReducer, [
    {
      _id: crypto.randomUUID(),
      title: "How to style children in tailwindcss",
      author: "Samad Altman",
      text: "To address a children in tailwindcss, you have to use [&:*] this as the universal selector, this is to test the width this field can stretch to, lets fix it first.To address a children in tailwindcss, you have to use [&:*] this as the universal selector, this is to test the width this field can stretch to, lets fix it first.To address a children in tailwindcss, you have to use [&:*] this as the universal selector, this is to test the width this field can stretch to, lets fix it first",
      createdAt: new Date().toLocaleDateString(),
    },
  ]);

  const addANewPost = ({ title, text }) => {
    const addANewPostAction = {
      type: "ADD_NEW_POST",
      payload: {
        _id: crypto.randomUUID(),
        title,
        author: "Take From Session Object",
        text,
        createdAt: new Date().toLocaleDateString(),
      },
    };
    dispatchPosts(addANewPostAction);
  };

  function deleteOnePost(postId) {
    const deletePostAction = {
      type: "DELETE_ONE_POST",
      payload: {
        _id: postId,
        // also send author id
      },
    };

    dispatchPosts(deletePostAction);
  }

  return (
    <PostsContext.Provider value={{ posts, addANewPost, deleteOnePost }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider;
