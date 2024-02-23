import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
import closeImg from '../images/icon-menu.svg'; 
import hamburger from '../images/icon-close.svg';
import { FaCartArrowDown, FaChevronDown, FaChevronRight, FaSearch, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useCategories } from "../Provider/MainContex";

function Nav () {
    // TOGGLE MENU
    // TOGGLING MENU STATE
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prev => prev = !prev);
        // setShowSearch(prev => prev = false);
        // setTimeout(() => {
        //     setOpacity(prev => prev = "opacity-0 h-0 top-12")
        // }, 1000);
        showSearch === true & showMenu === false & searchRef.current.value === '' && toggleSearch();
    }
    //TOGGLING CHEVRON/ SUBMENU
    const [showSubMenu, setShowSubMenu] = useState(false);
    const toggleChev = () => {
        setShowSubMenu(prev => prev = !prev);
    }

    //TOGGLING SEARCH
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(prev => prev = !prev)
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
                    resolve('opacity-0 h-0 top-12')
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
                    <ul className={`pl-5 transition duration-700 ${showSubMenu?'md:fixed md:opacity-100 md:h-auto md:grid grid-auto-flow md:w-screen md:top-20 md:left-0 md:gap-3': 'hidden md:block md:opacity-0 md:h-0 md:w-0'}`}>
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
            {/* <ul className="">
                <li className="fixed top-0 left-14">nnnooo</li>
                <li>bnns</li>
                <li>xkj</li>
                <li>kjx b</li>
                <li>lxnl</li>
            </ul> */}
            </div>
            <div className="flex items-center gap-5">
                <input ref={searchRef} type="search" placeholder="search..." className={`${showSearch?'w-3/4 rounded-2xl':'w-8 rounded-full'} ${opacity} z-0 fixed left-1/2 -translate-x-1/2 border-2 transition-all duration-1000 border-gray-300 focus:border-orange-500 outline-none py-1 px-3`} />
                <button onClick={toggleSearch} className="flex justify-start items-end">{showSearch?(<><FaSearch/><FaTimes className="w-1/4 h-1/4"/></>): <FaSearch/>}</button>
                <button><FaCartArrowDown/></button>
                <button><FaUserCircle/></button>
            </div>
        </nav>
    )
}

export default Nav;