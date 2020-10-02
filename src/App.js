import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import { data } from "./data";
import "./App.css";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  useEffect(() => {
    setProducts([]);

    const filtered = data.map((product) => ({
      ...product,
      filtered: product.category.includes(filter),
    }));
    setProducts(filtered);
  }, [filter]);

  return (
    <>
      <nav>
        <a href='#!' onClick={() => setFilter("all")}>
          All
        </a>

        <a href='#!' onClick={() => setFilter("cellphone")}>
          Cellphone
        </a>

        <a href='#!' onClick={() => setFilter("android")}>
          Android
        </a>

        <a href='#!' onClick={() => setFilter("ios")}>
          Ios
        </a>

        <a href='#!' onClick={() => setFilter("desktop")}>
          Desktop
        </a>

        <a href='#!' onClick={() => setFilter("laptop")}>
          Laptop
        </a>

        <a href='#!' onClick={() => setFilter("pc")}>
          PC
        </a>

        <a href='#!' onClick={() => setFilter("perfume")}>
          Perfume
        </a>
        <a href='#!' onClick={() => setFilter("watch")}>
          Watch
        </a>
      </nav>

      <Products products={products} />
    </>
  );
};

export default App;
