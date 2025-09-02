import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    // 🖥️ Laptops
    { id: 1, name: "MSI Laptop", category: "laptop", price: 1200, image: "/laptop1.avif" },
    { id: 2, name: "Dell Inspiron", category: "laptop", price: 900, image: "/img2.avif" },
    { id: 3, name: "HP Pavilion", category: "laptop", price: 850, image: "/hp.jpg" },
    { id: 4, name: "Lenovo ThinkPad", category: "laptop", price: 1100, image: "/lenovo.avif" },
    { id: 5, name: "Asus ROG", category: "laptop", price: 1400, image: "asus.jpg" },
    { id: 6, name: "Apple MacBook Air", category: "laptop", price: 1500, image: "applemackbook.jpg" },
    { id: 7, name: "Acer Nitro 5", category: "laptop", price: 1000, image: "https://via.placeholder.com/150" },
    
    // 🖥️ Monitors
    { id: 11, name: "Dell Monitor", category: "monitor", price: 300, image: "https://via.placeholder.com/150" },
    { id: 12, name: "LG Ultrawide", category: "monitor", price: 400, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Samsung Odyssey", category: "monitor", price: 500, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Acer Predator", category: "monitor", price: 450, image: "https://via.placeholder.com/150" },
    { id: 15, name: "BenQ Zowie", category: "monitor", price: 350, image: "https://via.placeholder.com/150" },
    
    // ⌨️ Keyboards
    { id: 21, name: "Mechanical Keyboard", category: "keyboard", price: 150, image: "https://via.placeholder.com/150" },
    { id: 22, name: "Logitech G Pro X", category: "keyboard", price: 130, image: "https://via.placeholder.com/150" },
    { id: 23, name: "Razer Huntsman", category: "keyboard", price: 160, image: "https://via.placeholder.com/150" },
    { id: 24, name: "Corsair K95", category: "keyboard", price: 170, image: "https://via.placeholder.com/150" },
    { id: 25, name: "SteelSeries Apex Pro", category: "keyboard", price: 180, image: "https://via.placeholder.com/150" },
    { id: 26, name: "HyperX Alloy FPS", category: "keyboard", price: 120, image: "https://via.placeholder.com/150" },
    { id: 27, name: "Cooler Master CK552", category: "keyboard", price: 110, image: "https://via.placeholder.com/150" },
    
    // 👕 MEN Section (21 items total)
    { id: 31, name: "Men T-Shirt", category: "men", type: "tshirt", price: 500, image: "/t-shirt.webp" },
    { id: 32, name: "Men Jeans", category: "men", type: "jeans", price: 1200, image: "/jeans.jpg" },
    { id: 33, name: "Men Shirt", category: "men", type: "shirt", price: 900, image: "/shirt.jpg" },
    { id: 40, name: "Men Polo", category: "men", type: "tshirt", price: 700, image: "/men polo.jpg" },
    { id: 41, name: "Men Jacket", category: "men", type: "jacket", price: 2500, image: "men jacket.jpg" },
    { id: 42, name: "Men Shorts", category: "men", type: "shorts", price: 800, image: "men shorts.jpg" },
    { id: 43, name: "Men Hoodie", category: "men", type: "hoodie", price: 1600, image: "https://via.placeholder.com/150" },
    { id: 44, name: "Men Blazer", category: "men", type: "blazer", price: 3000, image: "https://via.placeholder.com/150" },
    { id: 45, name: "Men Kurta", category: "men", type: "kurta", price: 1300, image: "https://via.placeholder.com/150" },
    { id: 46, name: "Men Suit", category: "men", type: "suit", price: 4500, image: "https://via.placeholder.com/150" },
    

    // 👗 WOMEN Section (21 items total)
    { id: 34, name: "Women Dress", category: "women", type: "dress", price: 1500, image: "/womenwear.webp" },
    { id: 35, name: "Women Top", category: "women", type: "top", price: 700, image: "/womentop.webp" },
    { id: 36, name: "Women Skirt", category: "women", type: "skirt", price: 1100, image: "/womenskirt.jpg" },
    { id: 60, name: "Women Saree", category: "women", type: "saree", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 61, name: "Women Kurti", category: "women", type: "kurti", price: 1200, image: "/womenkurti.avif" },
    { id: 62, name: "Women Lehenga", category: "women", type: "lehenga", price: 4000, image: "/womenlehanga.jpg" },
    { id: 63, name: "Women Jeans", category: "women", type: "jeans", price: 1500, image: "https://via.placeholder.com/150" },
    { id: 64, name: "Women Jacket", category: "women", type: "jacket", price: 3000, image: "https://via.placeholder.com/150" },
    { id: 65, name: "Women Hoodie", category: "women", type: "hoodie", price: 1700, image: "/womenhoodie.jpg" },
    { id: 66, name: "Women T-Shirt", category: "women", type: "tshirt", price: 800, image: "https://via.placeholder.com/150" },
    { id: 67, name: "Women Blazer", category: "women", type: "blazer", price: 3200, image: "/womenblazer.jpg" },
    
    // 👶 KIDS Section (21 items total)
    { id: 37, name: "Kids T-Shirt", category: "kids", type: "tshirt", price: 400, image: "/kidst-shirt.jpg" },
    { id: 38, name: "Kids Jeans", category: "kids", type: "jeans", price: 800, image: "/kidsjeans.jpg" },
    { id: 39, name: "Kids Jacket", category: "kids", type: "jacket", price: 1300, image: "/kidsjacket.jpg" },
    { id: 80, name: "Kids Shorts", category: "kids", type: "shorts", price: 500, image: "/kidsshort.jpg" },
    { id: 81, name: "Kids Hoodie", category: "kids", type: "hoodie", price: 900, image: "/hoodie.jpg" },
    { id: 82, name: "Kids Sweater", category: "kids", type: "sweater", price: 1000, image: "https://via.placeholder.com/150" },
    { id: 83, name: "Kids Dress", category: "kids", type: "dress", price: 1200, image: "/kidsdress.jpg" },
    { id: 84, name: "Kids Kurta", category: "kids", type: "kurta", price: 1100, image: "/kidskurta.webp" },
    { id: 85, name: "Kids Skirt", category: "kids", type: "skirt", price: 700, image: "/skirt.jpg" },
    { id: 86, name: "Kids Shirt", category: "kids", type: "shirt", price: 800, image: "https://via.placeholder.com/150" },
    
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,                             //syntax of createSlice
  reducers: {}
});

export default productSlice.reducer;