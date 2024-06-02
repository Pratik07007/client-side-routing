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
    <>
    

    <h1 className="text-5xl text-center text-red-500">ALL PRODUCTS</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
