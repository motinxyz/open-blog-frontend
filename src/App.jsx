import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { Suspense } from "react";
import CentralFallback from "./components/CentralFallback";

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
  },
});
function App() {
  return (
    <Suspense fallback={<CentralFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
