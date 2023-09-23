
const Category = ({category}) => {
    console.log(category);
    const {strCategoryThumb, strCategory, strCategoryDescription} = category;
    return (
        <div className="border rounded-xl shadow-xl p-3">
            <img src={strCategoryThumb} alt="" />
            <p><span className="font-bold text-md">Category_Name:</span> {strCategory} </p>
            <p><span className="font-bold text-md">Description:</span> {strCategoryDescription.slice(0, 200)}.....</p>
        </div>
    );
};

export default Category;