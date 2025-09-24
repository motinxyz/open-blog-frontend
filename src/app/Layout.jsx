import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import PostsContextProvider from "../features/posts/context/PostsContextProvider";
import Navbar from "../components/Navbar";
import AuthContextProvider from "../features/auth/context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { ScaleLoader } from "react-spinners";
function Layout() {
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <div className="flex h-screen w-full flex-col bg-gray-100">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
            <Suspense fallback={<ScaleLoader />}>
              <Outlet />
            </Suspense>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              theme="dark"
              toastClassName="bg-red-800 text-white border border-gray-700 rounded shadow"
              bodyClassName="text-sm font-medium"
              closeButton={false}
            />
          </main>
          <Footer />
        </div>
      </PostsContextProvider>
    </AuthContextProvider>
  );
}

export default Layout;
