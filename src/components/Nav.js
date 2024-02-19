import { useState } from "react";
import closeImg from '../images/icon-menu.svg'; 
import hamburger from '../images/icon-close.svg';
import { FaCartPlus, FaSearch } from 'react-icons/fa'

function Nav () {
    // TOGGLE MENU
    // TOGGLING MENU STATE
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prev => prev = !prev)
    }

    return (
        <nav>
            <div className="flex gap-5">
                <button onClick={toggleMenu} className="bg-transparent w-8 border-none md:hidden"><img src={showMenu? closeImg : hamburger} alt="hamburger/close icon" /></button>
                <h1 className="font-bold">justbuy</h1>
            </div>
            <div className="flex gap-5">
                <FaSearch/>
                <FaCartPlus/>
            </div>
        </nav>
    )
}

export default Nav;