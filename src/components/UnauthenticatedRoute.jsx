import { use } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../features/auth/context/AuthContext";
import Loading from "./Loading";

function UnauthenticatedRoute({ children }) {
  const { authState } = use(AuthContext);

  // While checking auth status, you can show a loading indicator
  if (authState.isLoading) {
    return (
      <div className="m-3 flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
        <Loading />
      </div>
    );
  }

  // If user is authenticated, redirect them away from login/register
  if (authState.isAuthenticated) {
    return <Navigate to="/posts" replace />;
  }

  // If user is not authenticated, render the requested page
  return children;
}

export default UnauthenticatedRoute;
