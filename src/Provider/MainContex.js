import {createContext, useContext, useEffect, useState} from 'react';

//CREATING NAVIGATION CONTEXT
export const useCategories = () => useContext(navProvider);
const navProvider = createContext() 

const MainContext = ({children}) => {
    const [navigator, setNavitor] = useState([]);
    
    // FETCHING CATEGORIES FOR NAVIGATION
    const fetchCategories = async () => {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        return data;
    }

    useEffect( () => {
        (async function () {
            const categories = await fetchCategories();
            setNavitor(prev => prev = categories);
        })()
    }, []);

    return (
        <navProvider.Provider value={navigator}>
            {children}
        </navProvider.Provider>
    )
}

export default MainContext;