import { Link, useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const { meals } = useLoaderData(); //fetched from api
  const mealsDetails = meals[0];
  const { strMeal, strMealThumb, strInstructions, strCategory } = mealsDetails;
  return (
    <div className="">
      <h1 className="font-bold text-2xl">{strMeal}</h1>
      <img src={strMealThumb} alt="" className="w-72 rounded-xl" />
      <p><span className="font-bold">Cooking Instruction: </span> {strInstructions}</p>
      <p>
        <span className="font-bold">Category: </span>
        <Link to={`/category/${strCategory}`}>
          <span className="text-green-600 font-bold">{strCategory}</span>
        </Link>
      </p>
    </div>
  );
};

export default MealDetails;
