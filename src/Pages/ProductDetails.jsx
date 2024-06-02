import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../utils/BASE_URL";


const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
//   console.log(product);
  useEffect(() => {
    fetch(`${BASE_URL}/Allproducts/${_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product))
      .catch((error) => console.error("Error fetching product:", error));
  }, [_id]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 my-8">
        Product Details
      </h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="mb-4">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">{product?.name}</h2>
          <p className="text-sm text-gray-600">Category: {product?.category}</p>
          <p className="text-base text-gray-700 mb-2">{product?.desc}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg text-red-500 font-semibold">
                Discounted Price: ${product?.discountedPrice}
              </p>
              <p className="text-sm text-gray-500">
                Original Price: ${product?.originalPrice}
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
