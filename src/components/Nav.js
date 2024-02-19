import { useState } from "react";
import closeImg from '../images/icon-menu.svg'; 
import hamburger from '../images/icon-close.svg';
import { FaCartArrowDown, FaSearch, FaUserCircle } from 'react-icons/fa';

function Nav () {
    // TOGGLE MENU
    // TOGGLING MENU STATE
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prev => prev = !prev)
    }

    return (
        <nav className="flex justify-between p-5 border-b-2">
            <div className="flex gap-2">
                <button onClick={toggleMenu} className="bg-transparent w-8 border-none md:hidden"><img src={showMenu? hamburger : closeImg} alt="hamburger/close icon" /></button>
                <h1 className="font-bold text-xl md:text-2xl capitalize">justbuy</h1>
            </div>
            <div className="flex items-center gap-5">
                <button><FaSearch/></button>
                <button><FaCartArrowDown/></button>
                <button><FaUserCircle/></button>
            </div>
        </nav>
    )
}

export default Nav;