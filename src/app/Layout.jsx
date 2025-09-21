import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import PostsContextProvider from "../features/posts/context/PostsContextProvider";
import Navbar from "../components/Navbar";
import AuthContextProvider from "../features/auth/context/AuthContextProvider";

function Layout() {
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <div className="flex h-screen w-full flex-col bg-gray-100">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PostsContextProvider>
    </AuthContextProvider>
  );
}

export default Layout;
