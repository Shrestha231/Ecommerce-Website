import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Men() {
  const { products } = useSelector((state) => state.products);

  // Only men's products
  const menProducts = products.filter((p) => p.category === "men");

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 text-center">Men's Collection</h2>
      <div className="grid grid-cols-3 gap-6 p-4">
        {menProducts.length > 0 ? (
          menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No products found in Men’s section.
          </p>
        )}
      </div>
    </div>
  );
}

export default Men;
