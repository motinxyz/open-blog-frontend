import React, { use } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

function AuthenticatedRoutes({ children }) {
  const { authState } = use(AuthContext);

  if (authState.isLoading) {
    return (
      <div className="m-3 flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
        {/* <Loading /> */}
        <p>Auth Status Checking</p>
      </div>
    );
  }

  //   is an unauthenticated user tries to access
  if (!authState.isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}

export default AuthenticatedRoutes;
