import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RouterProvider } from "react-router-dom";
import router from "./components/router/router";

function App() {
   return <RouterProvider router={router} />;
}

export default App;
