import { useFormStatus } from "react-dom";

export function SubmitPostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="my-4 cursor-pointer rounded bg-gray-800 px-3 py-2 font-bold text-white hover:bg-gray-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? <ScaleLoader color="#061957" /> : "Create Post"}
    </button>
  );
}
