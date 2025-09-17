import PostStream from "../domains/posts/PostStream";
import Layout from "./Layout";
import CentralFallback from "../components/CentralFallback";
import React from "react";
const CreateNewPost = React.lazy(()=> import("../domains/posts/CreateNewPost"))

export const routes = [
  {
    path: "posts?",
    element: <Layout />,
    errorElement: <CentralFallback />,
    children: [
      {
        index: true,
        element: <PostStream />,
        errorElement: <CentralFallback />,
      },
      {
        path: "new",
        element: <CreateNewPost />,
      },
    ],
  },
];
