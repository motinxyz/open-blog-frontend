import React, { use } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

// const sleep = async() => new Promise((resolve) => setTimeout(resolve(), 2000));

function PostCard() {
  const { posts } = use(PostsContext);

  const postsEl = posts.map((post) => (
    <Link
      key={post._id}
      to={"/posts/" + post._id}
      className="m-5 block opacity-85 transition-all hover:scale-105 hover:opacity-100"
    >
      <article className="relative flex h-40 flex-col rounded-lg border border-gray-700 px-5 pt-4 pb-10 shadow-lg md:h-52">
        <div className="md:border-b-2 md:border-gray-300 md:pb-3">
          {post.title}
        </div>
        <div className="hidden flex-1 overflow-hidden pt-3 md:block">
          {post.text}
        </div>

        <div className="absolute right-6 bottom-3 text-sm opacity-80">
          <span className="">{post.author}</span>
          <span className="">, </span>
          <span className="">{post.createdAt}</span>
        </div>
      </article>
    </Link>
  ));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {postsEl}
    </div>
  );
}

export default PostCard;
