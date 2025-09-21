import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../features/auth/context/AuthContext";
import Loading from "./Loading";

function Logout() {
  const { logoutUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logoutUser();
      // Redirect to home page after logout.
      navigate("/", { replace: true });
    };
    performLogout();
  }, [logoutUser, navigate]);

  return (
    <div className="m-3 flex h-full w-full items-center justify-center rounded-lg bg-gray-300">
      <Loading />
    </div>
  );
}

export default Logout;
