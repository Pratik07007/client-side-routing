import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allProducts")
      .then((res) => res.json())
      .then((res) => setProducts(res.product));
  }, []);
  return (
    // <>
    //   <div className="flex items-start">
    //     {products.map((product) => (
    //       <Produc`tCard key={product._id} product={product} />
    //     ))}
    //   </div>
    // </>

    <div className="w-screen bg-red-400">
      <h1>Apple</h1>
    </div>
  );
};

export default HomePage;
