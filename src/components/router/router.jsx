import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/h",
      element: <div>Hello test!</div>,
   },
]);

export default router;
