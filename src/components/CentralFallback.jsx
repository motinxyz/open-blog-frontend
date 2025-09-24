import React from "react";
import { PuffLoader } from "react-spinners";

function CentralFallback() {
  return (
    <div className="m-3 flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
      {/* <PuffLoader size={10} /> */}
      <p>Central Fallback</p>
    </div>
  );
}

export default CentralFallback;
