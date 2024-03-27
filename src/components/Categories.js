import { useEffect, useState } from "react";
import { useCategories } from "../Provider/MainContex";
import Category from "./Category";

const Categories = () => {
  const { allProduct } = useCategories();
  const [modCategoryArray, setModCategoryArray] = useState([]);
  const categoryArr = () => {
    let prev = "";
    if (allProduct.length > 0) {
      const allCategory = allProduct
        .map((product) => ({
          id: product.id,
          category: product.category,
          image: product.images[product.images.length - 1],
        }))
        .sort((a, b) => a.id - b.id)
        .filter((categoryObj) => {
          if (prev !== categoryObj.category) {
            prev = categoryObj.category;
            return categoryObj;
          } else return null;
        });

      setModCategoryArray((prev) => (prev = allCategory));
    }
  };

  useEffect(() => {
    categoryArr();
  }, [allProduct]);

  return (
    <section className=" relative left-1/2 -translate-x-1/2 max-w-screen-xl">
      <h2 className="font-bold text-gray-800 text-2xl pt-10 px-10">
        Categories
      </h2>
      <div id="categories" className="grid p-10 pt-5 gap-5 grid-auto-flow">
        {modCategoryArray.map((cat, ID) => (
          <Category key={ID} cat={cat} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
