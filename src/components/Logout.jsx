import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../features/auth/context/AuthContext";
import Loading from "./Loading";
import { logout } from "../services/authService";

function Logout() {
  const navigate = useNavigate();
  const { refreshAuthStatus } = use(AuthContext);

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      // Refresh global auth state and then redirect to home page after logout.
      await refreshAuthStatus();
      navigate("/", { replace: true });
    };
    performLogout();
  }, [navigate, refreshAuthStatus]);

  return (
    <div className="m-3 flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
      <Loading />
    </div>
  );
}

export default Logout;
