import { createBrowserRouter } from "react-router-dom";
import Home from './../components/Home/Home';
import About from "../components/About Us/About";
import Contact from './../components/Contact/Contact';
import MainLayout from "../Layout/MainLayout";
import ListOfCategory from "../components/Category/ListOfCategory";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      },
      {
        path: '/category/:name',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`),
        element: <ListOfCategory></ListOfCategory>
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
