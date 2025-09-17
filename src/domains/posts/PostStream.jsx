import React from "react";
import PostCard from "./PostCard";
import { Suspense } from "react";
import Spinner from "../../components/Spinner";
import Loading from "../../components/Loading";

function PostStream() {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<Loading />}>
        <PostCard />
      </Suspense>
    </div>
  );
}

export default PostStream;
