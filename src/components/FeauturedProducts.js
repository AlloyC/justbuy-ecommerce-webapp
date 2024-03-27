import ProductCard from "./ProductCard";
import { useCategories } from "../Provider/MainContex";
import { useEffect, useState } from "react";

const FeaturedProduct = () => {
  const { allProduct } = useCategories();
  const [featured, setFeatured] = useState([]);

  //   CREATING FEATURED ARRAY BY RANDOM FILTERING OF ALLPRODUCT

  function featuredFunction() {
    const featured = [];
    const indices = [];
    if (allProduct.length > 0) {
      for (let i = 0; i < 16; i++) {
        let indexArray;
        function random() {
          const index = Math.ceil(Math.random() * (allProduct.length - 1));
          if (indices.includes(index)) {
            random();
          } else {
            indexArray = index;
            indices.push(index);
          }
        }
        random();

        featured.push(allProduct[indexArray]);
      }
      setFeatured((prev) => (prev = featured));
    }
    return null;
  }
  useEffect(() => {
    featuredFunction();
  }, [allProduct]);

  return (
    <div className=" relative left-1/2 -translate-x-1/2 max-w-screen-xl">
      <h2 className="capitalize font-bold text-gray-800 text-2xl pt-10 px-10">
        Featured product
      </h2>
      <div className="grid p-10 pt-5 gap-5 grid-auto-flow">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            settings={{
              title: product.title,
              images: product.images,
              // description: product.description,
              price: product.price,
              percentage: product.discountPercentage,
              company: product.brand,
              card: true,
              // button: true,
              // incrementingSection: true
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
