import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
const Women = () => {
  const settings={
        dots:true,
        infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, //laptop view hai 1024 laptop se niche that is tablet me 2 slide dikhega
      { breakpoint: 640, settings: { slidesToShow: 1 } },//mobile me 1 slide dikhega
    ],
  };
  const images=[
    "womenwear.webp",


  ]
    const { products } = useSelector((state) => state.products);

  // Only women's products ye filter wala return ke upr bnayenge
  const womenProducts = products.filter((p) => p.category === "women");

  return (
    <div>
      <div className="w-full">
      <Slider {...settings}>
        {images.map((imge,i)=>(
          <div key={i}>
            <img
              src={imge}
              alt={`slide-${i}`}
              className="w-full h-48 md:h-[60vh] object-cover "
            /> 
            </div> 
         ))}  
      </Slider>
    </div>
     <h2 className="text-2xl font-bold my-4 text-center">WoMen's Collection</h2>
      <div className="grid grid-cols-3 gap-6 p-4">
        {womenProducts.length > 0 ? (
          womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No products found in Men’s section.
          </p>
        )}
      </div>
    </div>

    
  )
}

export default Women