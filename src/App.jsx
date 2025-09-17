import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { Suspense } from "react";
import CentralFallback from "./components/CentralFallback";
// import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
  },
});
function App() {
  return (
    // <ThemeProvider>
    <Suspense fallback={<CentralFallback />}>
      <RouterProvider router={router} />
    </Suspense>
    // </ThemeProvider>
  );
}

export default App;
