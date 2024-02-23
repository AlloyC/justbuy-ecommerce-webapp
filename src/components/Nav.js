import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import closeImg from '../images/icon-menu.svg'; 
import hamburger from '../images/icon-close.svg';
import { FaCartArrowDown, FaChevronDown, FaChevronRight, FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useCategories, useSearch } from "../Provider/MainContex";

function Nav () {
    const {searchVal , searchFunction} = useSearch();

    // TOGGLE MENU
    // TOGGLING MENU STATE
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prev => prev = !prev);
        showSearch === true & showMenu === false & searchRef.current.value === '' && toggleSearch();
    }
    //TOGGLING CHEVRON/ SUBMENU
    const [showSubMenu, setShowSubMenu] = useState(false);
    const toggleChev = () => {
        setShowSubMenu(prev => prev = !prev);
        showSearch === true & showSubMenu === false & searchRef.current.value === '' && toggleSearch();
    }

    //TOGGLING SEARCH
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        showMenu && toggleMenu();
        showSubMenu & !showSearch && toggleChev();
        setShowSearch(prev => prev = !prev);
        toggleOpacity();
    }

    // ADDING AND REMOVING SEARCH INPUT
    const [opacity, setOpacity] = useState('opacity-0 h-0 top-12');
    const removeSearch = async () => {
        if (opacity === "opacity-0 h-0 top-12") {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('opacity-100 top-20')
                }, 400);
            })
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('opacity-0 h-0 top-12');
                    searchFunction('')
                }, 1000);
            })
        }
        
    }
    const toggleOpacity = async () => {
        const newVal = await removeSearch();
        setOpacity(newVal)
    }

    // SEARCH REF
    const searchRef = useRef();

    const categoryNavigation = useCategories();

    return (
        <nav className="flex fixed top-0 w-screen justify-between p-5 border-b-2">
            <div className="flex z-20 gap-2">
                <button onClick={toggleMenu} className="bg-transparent w-8 border-none md:hidden"><img src={showMenu? hamburger : closeImg} alt="hamburger/close icon" /></button>
                <h1 className="font-bold text-xl md:text-2xl capitalize">justbuy</h1>
                <ul className={`${showMenu?'left-0': '-left-52'} transition-[left] backdrop-blur-sm md:bg-transparent bg-slate-50 duration-1000 md:left-auto fixed px-5 pt-2 md:pt-0 sub-nav border-2 md:border-none pb-36 md:pb-0 h-screen md:h-auto top-16 mt-1 md:mt-0 md:static md:justify-start md:items-center md:flex md:gap-5 md:pl-14`}>
                <li className=""><Link to='/'>Home</Link></li>
                <li><span className="flex items-center gap-1"><Link to='/category'>Category</Link><button onClick={toggleChev}>{showSubMenu?<FaChevronDown/>:<FaChevronRight/>}</button>
                    </span>
                    <ul className={`md:hidden pl-5 transition duration-700 ${showSubMenu?'md:fixed md:opacity-100 md:h-auto md:grid grid-auto-flow md:w-screen md:top-20 md:left-0 md:gap-3': 'hidden md:block md:opacity-0 md:h-0 md:w-0'}`}>
                        {categoryNavigation.map(subCat => {
                            return (
                                <li key={subCat}>
                                    <Link to={`/category/${subCat}`} >
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
            <ul aria-label="category subnavigation" className={` hidden transition z-50 backdrop-blur-[1px] duration-700 border-2 ${showSubMenu?'p-5 md:fixed md:opacity-100 md:h-auto md:grid grid-auto-flow md:w-screen md:top-20 md:-mt-2 md:left-0 md:gap-3': 'md:block md:opacity-0 md:h-0 md:w-0 p-0 mt-0 border-none'}`}>
                        {categoryNavigation.map(subCat => {
                            return (
                                <li key={subCat}>
                                    <Link to={`/category/${subCat}`} >
                                        {subCat}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
            <div className="flex items-center gap-5">
                <input ref={searchRef} onFocus={() => showMenu && toggleMenu()} onChange={() => searchFunction(searchRef.current.value)} value={searchVal} type="search" placeholder="search..." className={`${showSearch?'w-3/4 rounded-2xl':'w-8 rounded-full'} ${opacity} z-0 fixed left-1/2 -translate-x-1/2 border-2 transition-all duration-1000 border-gray-300 focus:border-orange-500 outline-none py-1 px-3 max-w-xl`} />
                <button onClick={toggleSearch} className="flex justify-start items-end">{showSearch?(<><FaSearch/><FaTimes className="w-1/4 h-1/4"/></>): <FaSearch/>}</button>
                <button><FaCartArrowDown/></button>
                <button><FaUserCircle/></button>
            </div>
        </nav>
    )
}

export default Nav;