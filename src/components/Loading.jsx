import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-200 bg-opacity-50">
      <PropagateLoader color="#002100" size={20} />
    </div>
  );
}
