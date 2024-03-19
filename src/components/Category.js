import { Link } from "react-router-dom";

const Category = ({ cat }) => {
    console.log(cat.category);
  return <div flex className="bg-white bg-opacity-50 flex justify-center flex-col gap-3 items-center shadow-md rounded p-4 hover:scale-105">
    <img src={cat.image} className="rounded-full border-2 border-orange-300 w-10" alt="" />
    <Link to={'/category/'+ cat.category}>
        <span className="font-semibold text-xl capitalize text-gray-600">{cat.category}</span>
    </Link>
  </div>;
};

export default Category;
