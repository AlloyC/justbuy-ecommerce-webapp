import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";

//CREATING NAVIGATION CONTEXT
export const useCategories = () => useContext(navProvider);
const navProvider = createContext();

export const useSearch = () => useContext(search);
const search = createContext();

export const useSlider = () => useContext(slider);
const slider = createContext();

//CONTEXT FUNCTION
function MainContext({ children }) {
  const sliderImg = [image1, image2, image3];

  const [navigator, setNavigator] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  //  FETCHING PRODUCTS
  // const fetchProducts = async () => {
  //   const res = await fetch("https://dummyjson.com/products?limit=0");
  //   const data = await res.json();
  //   return data;
  // };

  const productsRef = collection(db, "products");

  // FETCHING CATEGORIES FOR NAVIGATION
  const fetchCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    return data;
  };

  // SEARCH VALUE
  const [searchVal, setSearchVal] = useState("");

  const searchFunction = (input) => setSearchVal((prev) => (prev = input));

  useEffect(() => {
    (async function () {
      const categories = await fetchCategories();
      // const products = await fetchProducts();
      // setAllProduct((prev) => (prev = products));
      setNavigator((prev) => (prev = categories));

      const data = await getDocs(productsRef);
      setAllProduct(data.docs.map((doc) => ({ ...doc.data() })));
    })();
  }, []);

  return (
    <navProvider.Provider value={{ navigator, allProduct }}>
      <search.Provider value={{ searchVal, searchFunction }}>
        <slider.Provider value={sliderImg}>{children}</slider.Provider>
      </search.Provider>
    </navProvider.Provider>
  );
}

export default MainContext;
