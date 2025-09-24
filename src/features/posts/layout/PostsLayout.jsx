import React from "react";
import { Outlet } from "react-router";
import Dock from "../components/Dock";
import { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";

function PostsLayout() {
  return (
    <div className="h-full">
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
      <Dock />
    </div>
  );
}

export default PostsLayout;
