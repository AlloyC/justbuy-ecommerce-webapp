// import { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import { useMenus } from "../Provider/MenuContext";
import { Link } from "react-router-dom";

const Menu = ({ hidden }) => {
  const MenuArr = useMenus();

  // const [mobile, setMobile] = useState("true");
  // const menuUl = useRef();

  // const toggleMainNav = () => {
  //   setHidden((prev) => (prev = !prev));
  // };

  // toggle(toggleMainNav);

  // const toggleSubNav = () => {
  //   subNavigation.current.classList.contains("-translate-x-full")
  //     ? subNavigation.current.classList.remove("-translate-x-full")
  //     : subNavigation.current.classList.add("-translate-x-full");
  // };

  // useEffect(() => {
  //   toggle(menuUl);
  //   // console.log(menuUl);
  // }, []);
  return (
    <ul
      className={`${
        hidden
          ? "hidden"
          : "bg-white opacity-95 backdrop-blur-md flex h-fit  border-b-2"
      } w-screen md:w-fit absolute -translate-x-5 top-16 md:relative md:translate-x-0 md:top-auto transition-opacity duration-1000 md:flex justify-evenly z-0 gap-8 p-4 pl-8 items-center lg:text-lg`}
    >
      {MenuArr.map((menu) => (
        <li key={menu} className="hover:scale-105">
          <Link to={menu} key={menu + "link"}>
            {menu}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
