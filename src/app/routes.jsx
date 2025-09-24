import PostStream from "../features/posts/page/PostStream";
import Layout from "./Layout";
import CentralFallback from "../components/CentralFallback";
import React from "react";
import { ScaleLoader } from "react-spinners";
import Login from "../features/auth/page/Login";
import Register from "../features/auth/page/Register";
import Logout from "../components/Logout";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import AuthenticatedRoutes from "../components/AuthenticatedRoutes";
import PostsLayout from "../features/posts/layout/PostsLayout";

const CreatePostPage = React.lazy(
  () => import("../features/posts/page/CreatePostPage"),
);

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <CentralFallback />,
    children: [
      {
        element: <PostsLayout />,
        errorElement: <ScaleLoader />,
        children: [
          {
            index: true,
            element: <PostStream />,
          },
          {
            path: "posts",
            element: <PostStream />,
          },
          {
            path: "posts/write",
            element: (
              <AuthenticatedRoutes>
                <CreatePostPage />
              </AuthenticatedRoutes>
            ),
          },
        ],
      },
      {
        path: "login",
        element: (
          <UnauthenticatedRoute>
            <Login />
          </UnauthenticatedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <UnauthenticatedRoute>
            <Register />
          </UnauthenticatedRoute>
        ),
      },
      {
        path: "logout",
        element: (
          <AuthenticatedRoutes>
            <Logout />
          </AuthenticatedRoutes>
        ),
      },
    ],
  },
];
