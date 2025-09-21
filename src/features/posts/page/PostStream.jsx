import React from "react";
import PostCard from "../components/PostCard";
import { Suspense } from "react";
import Spinner from "../../../components/Spinner";
import Loading from "../../../components/Loading";

function PostStream() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<Loading />}>
        <PostCard />
      </Suspense>
    </div>
  );
}

export default PostStream;
