import { useCategories, useCard } from "../Provider/ProductContext";
import Category from "./Category";
import { useEffect, useState } from "react";
import { useScroll } from "../App";

const Categories = () => {
    const categories = useCategories();
    const product = useCard();
    const {hidden, toggle} = useScroll()

    const [expanded,setExpanded] = useState(false);
    const expandMenu = () => {
        setExpanded(prev => prev = !prev);
    }

    useEffect(() => { 
        !hidden && toggle();
    }, [expanded])
    
    const closeMenu = () => {
        setExpanded(false)
    }

    useEffect(() => {
        window.outerWidth >= 768 ? setExpanded(true) : setExpanded(false);
    }, [])

    return (
        <section className="md:grid w-screen max-w-screen-2xl grid-cols-auto">
            <nav className={`fixed transition-all duration-1000 ${expanded?'':'-translate-x-[90%]'} md:translate-x-0 bg-gray-100 backdrop-blur-lg bg-opacity-60 z-50 md:sticky h-screen -mb-10 flex flex-col items-center top-16  w-48 p-4 `}>
                <div onClick={expandMenu} className="absolute h-full w-9 left-[100%] -translate-x-full top-0">
                    <div className={`border-b-transparent border-b-8 border-r-0 border-l-[12px] border-l-gray-700 border-t-transparent border-t-8  absolute top-1/2 -translate-y-1/2 left-1/2 transition-all duration-500 -translate-x-1/2 ${expanded?'border-none w-1 h-16 bg-gray-700' : ' animate-bounce'} ${window.outerWidth <= 768 ? '': 'hidden'}`}>
                </div>
                </div>
                <ul className="h-full -z-20 overflow-y-scroll scrollbar-hidden">
                    {categories.map(eachCategory => {
                        return (<li key={eachCategory + 'link'} className="hover:scale-105 hover:translate-x-1 active:scale-110">
                            <a href={"#" + eachCategory}>
                                {eachCategory}
                            </a>
                        </li>)
                        }
                    )}
                </ul>
            </nav>
            <Category closeMenu={closeMenu} categoryProduct={product} categories={categories}/>
        </section>
    )
}

export default Categories;