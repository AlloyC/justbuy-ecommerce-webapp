import {Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import { useCard } from "../Provider/ProductContext";
import Card from "./Card";

const ProductSection =  () => {
    const product = useCard();

    return (
        <section className="md:flex md:gap-5 bg-gray-100 bg-opacity-55">
                <Routes>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path='/categories/1' element={<Card/>} />
                </Routes>
        </section>
    )
}

export default ProductSection;