import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

function Kids(){
  const {products} =useSelector((state)=>state.products);
  const kidsproduct=products.filter((p)=>p.category==="kids");

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 text-center">Kid's Collection</h2>
      <h3>Kids wear</h3>
       <div className="grid grid-cols-3 gap-6 p-4">
              {kidsproduct.length > 0 ? (
                kidsproduct.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">
                  No products found in kids section.
                </p>
              )}
            </div>
    </div>
  );
}

export default Kids
