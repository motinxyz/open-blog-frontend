import React, { use } from "react";
import { Link } from "react-router-dom";

const dummyPosts = [
  {
    _id: "dummyId01",
    title: "How to style children in tailwindcss",
    text: "To address a children in tailwindcss, you have to use [&:*] this as the universal selector",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    _id: "dummyId02",
    title: "How to style children in tailwindcss",
    text: "To address a children in tailwindcss, you have to use [&:*] this as the universal selector",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    _id: "dummyId03",
    title: "How to style children in tailwindcss",
    text: "To address a children in tailwindcss, you have to use [&:*] this as the universal selector, this is to test the width this field can stretch to, lets fix it first.To address a children in tailwindcss, you have to use [&:*] this as the universal selector, this is to test the width this field can stretch to, lets fix it first.To address a children in tailwindcss, you have to use [&:*] this as the universal selector, this is to test the width this field can stretch to, lets fix it first",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    _id: "dummyId04",
    title: "How to style children in tailwindcss",
    text: "To address a children in tailwindcss, you have to use [&:*] this as the universal selector",
    createdAt: new Date().toLocaleDateString(),
  },
];

// In a real app, this promise would come from a data fetching library or a cached source.
// For this example, we create it once outside the component to prevent re-fetching on every render.
const postsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(dummyPosts);
  }, 2000); // Simulate a 2-second network delay
});

function PostCard() {
  // The `use` hook will "unwrap" the promise.
  // While it's pending, React will "suspend" and show the nearest <Suspense> fallback.
  const posts = use(postsPromise);

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
        <span className="absolute right-4 bottom-3 text-sm opacity-80">
          {post.createdAt}
        </span>
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
