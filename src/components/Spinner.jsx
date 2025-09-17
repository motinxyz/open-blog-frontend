import React from "react";

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-y-4 border-gray-800 text-gray-800"></div>
    </div>
  );
}

export default Spinner;
