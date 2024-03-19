import ProductCard from "./ProductCard";
import { useCategories } from "../Provider/MainContex";
import { useEffect, useState } from "react";

const FeaturedProduct = () => {
    const {allProduct} = useCategories();
    const [featured, setFeatured] = useState([]);
    
    //   CREATING FEATURED ARRAY BY RANDOM FILTERING OF ALLPRODUCT
   
    function featuredFunction() {
        const featured = [];
        if (allProduct.products) {for (let i = 0; i < 12; i++) {
            const indexArray = Math.ceil(Math.random() * (allProduct.products.length - 1));
            featured.push(allProduct.products[indexArray])}
            setFeatured(prev => prev = featured)
        }
        return null
    };
    useEffect(() => {
        featuredFunction();
        console.log(featured);
    }, [allProduct])

    return (
        <div className=" relative left-1/2 -translate-x-1/2 max-w-screen-xl">
            <h2 className="capitalize font-bold text-gray-800 text-2xl pt-10 px-10">Featured product</h2>
            <div className="flex flex-col gap-10">
            {featured.map(product => <ProductCard key={product.id} settings={{
                title : product.title,
                images : product.images,
                // description: product.description,
                price : product.price,
                percentage : product.discountPercentage,
                company : product.brand,
                card: true
                // button: true,
                // incrementingSection: true
            }}/>)}
            </div>
        </div>
    )
}

export default FeaturedProduct;