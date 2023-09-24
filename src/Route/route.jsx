import { createBrowserRouter } from "react-router-dom";
import Home from './../components/Home/Home';
import About from "../components/About Us/About";
import Contact from './../components/Contact/Contact';
import MainLayout from "../Layout/MainLayout";
import ListOfCategory from "../components/Category/ListOfCategory";
import MealDetails from "../components/Category/MealDetails";
import SearchResult from "../components/SearchResult/SearchResult";

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
        path: '/mealsDetail/:idMeal',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <MealDetails></MealDetails>
      },
      {
        path: '/search/:value',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.value}`),
        element: <SearchResult></SearchResult>
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
