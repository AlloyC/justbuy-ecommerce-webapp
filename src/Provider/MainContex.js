import {createContext, useState} from 'react';

//CREATING NAVIGATION CONTEXT
export const navProvider = createContext() 

const MainContext = ({children}) => {
    const [navigator, setNavitor] = useState(); 

    return (
        <navProvider.Provider value={navigator}>
            {children}
        </navProvider.Provider>
    )
}

export default MainContext;