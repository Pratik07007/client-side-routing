import React from "react";

const ProductCard = ({ product }) => {
  const { name, originalPrice, discountedPrice, desc, images } =
    product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-96 flex-shrink-0">
      {/* Product Image */}
      <div className="mb-4">
        <img src={images[0]} alt={name} className="w-full h-auto rounded-md" />
      </div>
      {/* Product Info */}
      <div className="text-gray-800">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-700 mb-2">{desc}</p>
        <div className="flex justify-between items-center">
          {/* Discounted Price */}
          <div>
            <p className="text-base text-red-500 font-semibold">
              ${discountedPrice}
            </p>
            {/* Original Price */}
            <p className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </p>
          </div>
          {/* Add to Cart Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
