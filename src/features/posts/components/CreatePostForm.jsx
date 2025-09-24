import { useEffect, useRef } from "react";
import { useActionState, use } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { createPost } from "../../../services/postsService";
import Alert from "./Alert";
import { SubmitPostButton } from "./SubmitPostButton";
import { PostsContext } from "../context/PostsContext";

function CreatePostForm() {
  const navigate = useNavigate();
  const [contentLength, setContentLength] = useState(0);

  const { refreshPosts } = use(PostsContext);

  const [state, formAction] = useActionState(createPostAction, {
    success: false,
    error: null,
    errors: [],
  });
  const hasRunSuccessEffect = useRef(false);

  useEffect(() => {
    if (state.success && !hasRunSuccessEffect.current) {
      hasRunSuccessEffect.current = true;
      toast.success("Successfully Posted");
      refreshPosts().then(() => {
        navigate("/posts");
      });
    }
  }, [state.success, refreshPosts, navigate]);

  async function createPostAction(previousState, formData) {
    const title = formData.get("title");
    const content = formData.get("content");

    try {
      return await createPost({ title, content });
    } catch (error) {
      // The service layer throws a structured error.
      return error;
    }
  }

  return (
    <form action={formAction} className="mx-auto my-5 w-full max-w-2xl">
      <h1 className="mb-3 text-2xl font-normal">Create New Post</h1>
      <Alert message={state.error} />
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
        />
        {state.errors?.find((err) => err.path === "title") && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors?.find((err) => err.path === "title").msg}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="content"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Content
        </label>
        <div className="relative">
          <textarea
            onChange={(event) => setContentLength(event.target.value.length)}
            id="content"
            name="content"
            placeholder="Write here..."
            className="h-80 w-full resize-none appearance-none rounded border border-gray-300 bg-white px-3 py-2 leading-tight shadow focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
          <div className="absolute right-2 bottom-2 text-sm text-black opacity-85">
            <span> length:</span>
            {contentLength ?? "0"}
          </div>
        </div>
        {state.errors?.find((err) => err.path === "content") && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors?.find((err) => err.path === "content").msg}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <SubmitPostButton />
      </div>
    </form>
  );
}

export default CreatePostForm;
