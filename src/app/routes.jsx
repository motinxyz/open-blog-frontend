import PostStream from "../features/posts/page/PostStream";
import Layout from "./Layout";
import CentralFallback from "../components/CentralFallback";
import React, { Suspense } from "react";
import { ScaleLoader } from "react-spinners";
import Loading from "../components/Loading";
import Login from "../features/auth/page/Login";
import Register from "../features/auth/page/Register";
import Logout from "../components/Logout";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import AuthenticatedRoutes from "../components/AuthenticatedRoutes";

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
        index: true,
        element: <PostStream />,
        errorElement: <ScaleLoader />,
      },
      {
        path: "posts",
        element: <PostStream />,
        errorElement: <ScaleLoader />,
      },
      {
        path: "posts/new",
        element: (
          <Suspense fallback={<Loading />}>
            <CreatePostPage />
          </Suspense>
        ),
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
