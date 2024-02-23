import {createContext, useContext, useEffect, useState} from 'react';

//CREATING NAVIGATION CONTEXT
export const useCategories = () => useContext(navProvider);
const navProvider = createContext() 

export const useSearch = () => useContext(search);
const search = createContext();

const MainContext = ({children}) => {
    const [navigator, setNavitor] = useState([]);
    
    // FETCHING CATEGORIES FOR NAVIGATION
    const fetchCategories = async () => {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        return data;
    }
    
    // SEARCH VALUE
    const [searchVal, setSearchVal] = useState('');

    const searchFunction = (input) => setSearchVal(prev => prev = input);

    useEffect( () => {
        (async function () {
            const categories = await fetchCategories();
            setNavitor(prev => prev = categories);
        })()
    }, []);

    return (
        <navProvider.Provider value={navigator}>
            <search.Provider value={{searchVal, searchFunction}}>
                {children}
            </search.Provider>
        </navProvider.Provider>
    )
}

export default MainContext;