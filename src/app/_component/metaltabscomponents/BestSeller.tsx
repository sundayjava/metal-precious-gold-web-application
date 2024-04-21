"use client"

import Slider from "react-slick";
import ItemsCard from "./ItemsCard";
import { useState, useEffect } from "react";

const BestSeller = (props:{product:any}) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const {product} = props

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showarrows = viewportWidth < 640 ? false : true;
  var settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: showarrows,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1
        }
      }
    ]

  };

  console.log("Best sales",product)

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
         {
          product.map(
            (items:any) => (
              <ItemsCard key={items.id} item={items}/>
            )
          )
         }
        </Slider>
      </div>
    </section>
  );
};

export default BestSeller;
