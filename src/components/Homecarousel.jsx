import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homecarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 1 } }, // 2xl screens
      { breakpoint: 1280, settings: { slidesToShow: 1 } }, // xl screens
      { breakpoint: 1024, settings: { slidesToShow: 1 } }, // laptop
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // tablet
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // mobile
    ],
  };

  const images = [
    "menc.avif",
    "women.png",
    "kids.avif"
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((imge, i) => (
          <div key={i}>
            <img
              src={imge}
              alt={`slide-${i}`}
              className="w-full h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[70vh] xl:h-[70vh] object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Homecarousel
