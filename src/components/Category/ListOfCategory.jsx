import { useLoaderData, Link } from "react-router-dom";

const ListOfCategory = () => {
  const { meals } = useLoaderData();
  console.log("these are meal list: " ,meals);
  return (
    <div
      className={
        meals.length > 5 ? "my-7 space-y-4" : "h-screen my-7 space-y-4"
      }
    >
      <h1 className="bg-pink-600 p-2 rounded-lg w-fit">
        <span className="font-bold">Total food:</span> {meals.length}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="shadow-xl rounded-lg border p-3">
              <div className="flex items-center gap-4">
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className="w-32 rounded-lg"
                />
                <h2 className="text-xl font-bold">{meal.strMeal}</h2>
              </div>
              <Link to={`/mealsDetail/${meal.idMeal}`}>
                <button className="btn btn-neutral mt-5">See Details</button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfCategory;
