import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContext from "./Provider/MainContex";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import FeaturedProduct from "./components/FeauturedProducts";

function App() {
  return (
    <div className="min-h-screen w-screen bg-opacity-50 bg-gray-100">
      <MainContext>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <main className="mt-20">
                <Carousel />
                <Categories />
                <FeaturedProduct />
              </main>
            }
          />
        </Routes>
      </MainContext>
    </div>
  );
}

export default App;
