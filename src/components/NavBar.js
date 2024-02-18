import Menu from "./Menu";
import MenuContext from "../Provider/MenuContext";
import cart from "../images/icon-cart.svg";
import profilePicture from "../images/image-avatar.png";
import MenuSVG from '../images/icon-menu.svg';
import { useScroll } from "../App";
import { useSearch } from "../Provider/ProductContext";
import { useRef } from "react";

const NavBar = () => {
  const {hidden, toggle } = useScroll();
  const search = useSearch();
  const searchRef = useRef();

  return (
    <nav className="flex justify-between md:justify-normal items-center backdrop-blur-sm bg-white bg-opacity-90 h-16 z-50 border-b-2 min-w-fit sticky top-0 
  ">
        <button onClick={toggle} className="absolute pl-4 md:hidden"><img src={MenuSVG} alt="" /></button>
        <h1 className="font-bold lg:text-3xl leading-4 text-2xl px-11 py-5
      ">JustBuy</h1>
        <MenuContext>
            <Menu hidden={hidden}/>
        </MenuContext>
        <div className=" flex items-center md:absolute pr-5 md:pr-16 w-max md:left-full md:-translate-x-full gap-4">
          <input ref={searchRef} onChange={() => {
            search(searchRef.current.value)}} type="text" className=" px-2 py-1 w-40 focus:outline-orange-300 border-2 rounded-sm" placeholder="search" />
        <img className="w-5 h-5" src={cart} alt="shopping cart icon" />
        <img className="w-10 h-10" src={profilePicture} alt="avatar" />
        </div>
    </nav>
  );
};

export default NavBar;
