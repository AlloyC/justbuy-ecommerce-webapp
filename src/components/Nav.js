import { useState } from "react";
import {Link} from 'react-router-dom';
import closeImg from '../images/icon-menu.svg'; 
import hamburger from '../images/icon-close.svg';
import { FaCartArrowDown, FaChevronDown, FaChevronRight, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useCategories } from "../Provider/MainContex";

function Nav () {
    // TOGGLE MENU
    // TOGGLING MENU STATE
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prev => prev = !prev)
    }
    //TOGGLING CHEVRON/ SUBMENU
    const [showSubMenu, setShowSubMenu] = useState(false);
    const toggleChev = () => {
        setShowSubMenu(prev => prev = !prev)
    }

    const categoryNavigation = useCategories();

    return (
        <nav className="flex fixed top-0 w-screen justify-between p-5 border-b-2">
            <div className="flex gap-2">
                <button onClick={toggleMenu} className="bg-transparent w-8 border-none md:hidden"><img src={showMenu? hamburger : closeImg} alt="hamburger/close icon" /></button>
                <h1 className="font-bold text-xl md:text-2xl capitalize">justbuy</h1>
                <ul className={`${showMenu?'left-0': '-left-52'} transition-[left] duration-1000 md:left-auto fixed px-5 pt-2 md:pt-0 sub-nav border-2 md:border-none pb-36 md:pb-0 h-screen md:h-auto top-16 mt-1 md:mt-0 md:static md:justify-start md:items-center md:flex md:gap-5 md:pl-14`}>
                <li><Link to='/'>Home</Link></li>
                <li><span className="flex items-center gap-1"><Link to='/category'>Category</Link><button onClick={toggleChev}>{showSubMenu?<FaChevronDown/>:<FaChevronRight/>}</button>
                    </span>
                    <ul className={`pl-5 transition duration-700 ${showSubMenu?'md:fixed md:opacity-100 md:h-auto md:grid grid-auto-flow md:w-screen md:top-20 md:left-0 md:gap-3': 'hidden md:block md:opacity-0 md:h-0 md:w-0'}`}>
                        {categoryNavigation.map(subCat => {
                            return (
                                <li key={subCat}>
                                    <Link to={`category/${subCat}`} >
                                        {subCat}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
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