"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import {slide1,slide2,slide3} from '../../../../public/index'
 import Image from "next/image";
import { useState, useEffect } from "react";

const CarouselSlideShow = () => {
  const [viewportWidth, setViewportWidth] = useState(0); // Initialize to 0 or any default value

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener only on the client side
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); 

  const showarrows = viewportWidth < 640 ? false : true;
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: showarrows,
    autoplay: true,
  };

  return (
    <section className="homeSlider bg-white">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <Image src={slide1} alt="slide1" className="w-full md:h-[80%] h-[320px] object-cover md:rounded-2xl rounded-lg cursor-pointer"/>
          <Image src={slide2} alt="slide2" className="w-full md:h-[80%] h-[320px] object-cover md:rounded-2xl rounded-lg cursor-pointer"/>
          <Image src={slide3} alt="slide3" className="w-full md:h-[80%] h-[320px] object-cover md:rounded-2xl rounded-lg cursor-pointer"/>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSlideShow;
