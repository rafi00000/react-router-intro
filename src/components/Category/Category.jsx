import { Link, useNavigate } from "react-router-dom";

const Category = ({category}) => {

    const {strCategoryThumb, strCategory, strCategoryDescription} = category;
    return (
        <div className="border rounded-xl shadow-xl p-3 flex flex-col justify-between">
            <img src={strCategoryThumb} alt="" />
            <p><span className="font-bold text-md">Category_Name:</span> {strCategory} </p>
            <p><span className="font-bold text-md">Description:</span> {strCategoryDescription.slice(0, 200)}.....</p>
            <Link to={`/category/${strCategory}`}><button className="btn btn-outline">Select</button></Link>
        </div>
    );
};

export default Category;