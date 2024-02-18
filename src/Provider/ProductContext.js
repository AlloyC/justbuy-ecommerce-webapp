import { useContext, createContext, useState, useEffect } from "react";
export const useCard = () => {
  return useContext(Products);
};
export const useCategories = () => {
  return useContext(Categories);
};
export const useSearch = () => {
  return useContext(SearchProduct);
};
export const useCurrent = () => {
  return useContext(Cards);
};

const Products = createContext();
const Categories = createContext();
const SearchProduct = createContext();
const Cards = createContext();

const ProductContext = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  //FETCHING PRODUCT DATA
  const fetchingProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=0");
    const jsonData = await res.json();
    return jsonData;
  };

  //FETCHING CATEGORIES
  const fetchCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const jsonData = await res.json();
    return jsonData;
  };

  //SEARCHING
  const search = (value) => {
    setData((prev) => {
      prev = allData.filter((datum) =>
        datum.title.toLowerCase().includes(value.toLowerCase())
      );
      return prev;
    });
  };

  //CURRENT CARD
  const [currentCardData, setCurrentCardData] = useState([]);
  const currentFunction = (current) => {
    setCurrentCardData(
      (prev) => (prev = allData.filter((datum) => datum.id === current))
    );
  };

  useEffect(() => {
    const dummyFetchin = async () => {
      const fetchedData = await fetchingProduct();
      const fetchedCategoryData = await fetchCategories();
      setData((prev) => (prev = fetchedData.products));
      setCategories((prev) => (prev = fetchedCategoryData));
      setAllData((prev) => (prev = fetchedData.products));
    };
    dummyFetchin();
  }, []);

  return (
    <SearchProduct.Provider value={search}>
      <Products.Provider value={data}>
        <Cards.Provider value={{ currentCardData, currentFunction }}>
          <Categories.Provider value={categories}>
            {children}
          </Categories.Provider>
        </Cards.Provider>
      </Products.Provider>
    </SearchProduct.Provider>
  );
};

export default ProductContext;
