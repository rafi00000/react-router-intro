import { Link, useLoaderData } from "react-router-dom";

const SearchResult = () => {
  const { meals } = useLoaderData();

  return (
    <div className="">
      <h1>Searched Result: {meals.length}</h1>
      {
        meals.map(meal => 
        <div key={meal.idMeal} className="p-3 shadow-xl rounded-xl flex items-center gap-4 my-8 border">
            <img src={meal.strMealThumb} alt="" className="w-52 rounded-xl"/>
            <h4 className="text-5xl font-bold">{meal.strMeal}</h4>
        </div>)
      }
    </div>
  );
};

export default SearchResult;
