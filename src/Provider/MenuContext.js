import { useContext, createContext } from "react";
import React from "react";

export const useMenus = () => {
  return useContext(Menus);
};

const Menus = createContext();

const MenuContext = ({ children }) => {
  const MenuArr = ["Categories", "About", "Contact"];
  return <Menus.Provider value={MenuArr}>{children}</Menus.Provider>;
};

export default MenuContext;
