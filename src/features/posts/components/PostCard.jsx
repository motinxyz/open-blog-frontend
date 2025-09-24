import React from "react";
import { Link } from "react-router-dom";

// const sleep = async() => new Promise((resolve) => setTimeout(resolve(), 2000));

function PostCard({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className="mt-10 text-center text-gray-500">No posts found.</p>;
  }
  // new Date().toLocaleTimeString
  const postsEl = posts.map((post) => (
    <Link
      key={post._id}
      to={"/posts/" + post._id}
      className="mx-5  my-3 block opacity-85 transition-all hover:scale-105 hover:opacity-100"
    >
      <article className="relative flex h-48 flex-col rounded-lg border border-gray-700 px-5 pt-4 pb-10 shadow-lg md:h-52">
        <div className="overflow-hidden md:border-b-2 md:border-gray-300 h-13 ">
          {post.title}
        </div>
        <div className="hidden flex-1 overflow-hidden mt-1 md:block">
          {post.content}
        </div>

        <div className="absolute right-6 bottom-3 text-sm opacity-80">
          <span className="">
            {post.author?.firstName} {post.author?.lastName}
          </span>
          <span className="">, </span>
          <span className="">
            {new Date(post.createdAt)?.toLocaleDateString()}
          </span>
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
