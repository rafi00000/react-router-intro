
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Home = () => {
    const {categories} = useLoaderData();
    console.log(categories);
    return (
        <div>
            <h1>Category name: {categories?.length}</h1>

            <h2 className="text-center text-xl font-bold hover:animate-ping">All Categories</h2>
            <div className="my-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Home;