import { useLoaderData } from "react-router-dom";

const ListOfCategory = () => {
    const {meals} = useLoaderData();
    console.log(meals);
    return (
        <div className={meals.length > 5? 'my-7 space-y-4': 'h-screen my-7 space-y-4'}>
            <h1 className="bg-pink-600 p-2 rounded-lg w-fit"><span className="font-bold">Total food:</span> {meals.length}</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
                {
                    meals.map(meal => (
                        <div key={meal.idMeal} className="flex items-center shadow-xl rounded-lg border gap-3 p-4">
                            <img src={meal.strMealThumb} alt="" className="w-32 rounded-lg"/>
                            <div>
                                <h2 className="text-xl font-bold">{meal.strMeal}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ListOfCategory;