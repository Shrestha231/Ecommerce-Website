import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Homecarousel from "../components/Homecarousel";
import { FaSearch } from "react-icons/fa";

function Home() {
  const { products } = useSelector((state) => state.products);

  // state for filter
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const[searchInput,setSearchInput] = useState("");

  
  // filter + search logic
  const filteredProducts = products.filter((p) => {
    const matchCategory = filter === "all" || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // filter products
  // const filteredProducts =
  //   filter === "all"
  //     ? products
  //     : products.filter((p) => p.category === filter);
  
const handleSearch = () => {
    setSearch(searchInput); // only update when button clicked
  };
  return (
    <div>
      {/* Banner */}
      <Homecarousel/>
      
      {/* Search Bar with Icon */}
      <div className="flex justify-center my-6">
        <div className="flex items-center w-1/2 border rounded-lg shadow overflow-hidden">
          <input type="text" placeholder="Search Product..." value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow px-4 py-2 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition"
          >
            <FaSearch />                        
             {/* FaSearch behaves like a button here  */}
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 justify-center my-6">
        <button onClick={() => setFilter("all")} className="px-4 py-2 bg-gray-200 rounded">
          All
        </button>
        <button onClick={() => setFilter("laptop")} className={`px-4 py-2 rounded ${
    filter === "laptop" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>
          Laptops
        </button>
        <button onClick={() => setFilter("monitor")} className={`px-4 py-2 rounded ${
    filter === "monitor" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>
          Monitors
        </button>
        <button onClick={() => setFilter("keyboard")} className={`px-4 py-2 rounded ${
    filter === "keyboard" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>

          Keyboards
        </button>
        <button onClick={() => setFilter("men")} className={`px-4 py-2 rounded ${
    filter === "men" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>
    
    Men
        </button>
        <button onClick={() => setFilter("women")} className={`px-4 py-2 rounded ${
    filter === "women" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>
    
          Women
        </button>
        <button onClick={() => setFilter("kids")} className={`px-4 py-2 rounded ${
    filter === "kids" ? "bg-blue-500 text-white" : "bg-gray-200"
  }`}>
    
          kids
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-6 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;