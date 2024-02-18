import { useRef } from "react";
import { useScroll } from "../App";
import { useCurrent } from "../Provider/ProductContext";
import { Link } from "react-router-dom";

const Category = ({categoryProduct, categories, closeMenu}) => {
    const {hidden, toggle} = useScroll();
    const {currentFunction} = useCurrent();
    const cardRef = useRef();

    const tempArr = [];
    categoryProduct.forEach(cat => tempArr.push(cat.category));

    return (
        <article onClick={() => {closeMenu(); !hidden && toggle()}}>
            {categories.filter(available => tempArr.includes(available)).map(eachCategory => {
                return (
                    <div className="border-l-2 pl-5 bg-white" id={eachCategory} key={eachCategory}>
                    <h2 className="font-bold sticky top-16 bg-white inline-block px-4 py-1 rounded-md z-0  mb-5 mt-5 border-2 text-xl capitalize">{eachCategory}</h2>
                    <div className="grid mr-6 template-auto gap-5">
                    {categoryProduct.filter(product => 
                    product.category === eachCategory
                ).map(product => (
                    <Link to={`${product.category}/${product.id}`}>
                    <div key={product.id} ref={cardRef} onClick={() => currentFunction(product.id)}  className="border-2 flex flex-col min-h-52 justify-between bg-gray-100 bg-opacity-60  rounded-t-lg rounded-b-md">
                        <div className="h-52">
                            <img className="h-full w-full object-cover object-center rounded-tr-lg rounded-tl-lg" src={product.images[0]} alt={product.title} loading="lazy" />
                        </div>
                        <div className=" py-4 px-2">
                            <h3 className="font-semibold uppercase border-b-2 max-h-14 overflow-hidden">{product.title}</h3>
                            <div className="flex justify-between p-2">
                                <h4 className="font-semibold">&#8358;{product.price}</h4>
                                <h4 className="bg-orange-200 text-orange-600 px-1 rounde-md"> -%{product.discountPercentage}</h4>
                            </div>
                            <button className="bg-orange-500 block w-full rounded-sm shadow-sm py-1 mt-2 shadow-gray-400 active:scale-90 hover:text-opacity-100 text-white text-opacity-85 font-bold">Add to cart</button>
                        </div>
                    </div>
                    </Link>))}
                    </div>
                    </div>
            )}
                )}
        </article>
    )
};

export default Category;