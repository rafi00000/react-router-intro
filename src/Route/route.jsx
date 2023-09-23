import { createBrowserRouter } from "react-router-dom";
import Home from './../components/Home/Home';
import About from "../components/About Us/About";
import Contact from './../components/Contact/Contact';
import MainLayout from "../Layout/MainLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },  
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default route;
