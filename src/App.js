import { createContext, useContext, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductSection from "./components/ProductSection";
import ProductContext from "./Provider/ProductContext";

const scroll = createContext();
export const useScroll = () => useContext(scroll);

function App() {
  const [navState, setNavState] = useState([]);
  const subNav = (navProps) => {
    setNavState((prev) => (prev = navProps));
  };
  const [hidden, setHidden] = useState(false);
  const toggle = () => {
    setHidden((prev) => (prev = !prev));
  };

  return (
    <scroll.Provider value={{ hidden, toggle }}>
      <div className="App w-screen max-w-screen-2xl">
        <ProductContext>
          <NavBar subNavigation={navState} />
          <ProductSection subNav={subNav} />
        </ProductContext>
      </div>
    </scroll.Provider>
  );
}

export default App;
