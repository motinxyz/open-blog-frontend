import React from "react";
import { useFormStatus } from "react-dom";
import { PostsContext } from "../context/PostsContext";
import { use } from "react";
import { useNavigate } from "react-router-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="my-4 cursor-pointer rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Creating..." : "Create Post"}
    </button>
  );
}

function CreateNewPost() {
  const { addANewPost } = use(PostsContext);
  const navigate = useNavigate();

  async function createPostAction(formData) {
    // This is a React Action. In a real app, you'd typically make an API call here.
    // We'll simulate a network delay to show the pending state.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const post = {
      title: formData.get("title"),
      text: formData.get("text"),
    };

    console.log("New Post Created:", post);
    addANewPost(post);
    navigate("/posts");
  }

  return (
    <form action={createPostAction} className="mx-auto my-5 w-full max-w-2xl">
      <h1 className="mb-3 text-2xl font-normal">Create New Post</h1>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="How to avoid hell"
          className="w-full appearance-none rounded border border-gray-300 bg-white px-3 py-3 leading-tight shadow focus:ring-2 focus:ring-gray-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="text"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Text
        </label>
        <textarea
          id="text"
          name="text"
          placeholder="Write here..."
          className="h-80 w-full resize-none appearance-none rounded border border-gray-300 bg-white px-3 py-2 leading-tight shadow focus:ring-2 focus:ring-gray-500 focus:outline-none"
          required
        />
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}

export default CreateNewPost;
