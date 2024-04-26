"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import { Star } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect } from "react";
import { userReviews } from "@/app/_utility/headerData";

const Usercarousel = () => {
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: showarrows,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="text-decoration-none md:mt-28 mt-20 text-darkaccent leading-[46px] text-[36px] font-[700] mb-[24px]">
        <h1>
          More than <span className="text-green-600">102,000 users</span>{" "}
          already
        </h1>
        <p>trust us!</p>
      </div>
      <div className="mt-20" />
      <div className="slider-container">
        <Slider {...settings}>
          {userReviews.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-gray-100 shadow-lg rounded-md p-2">
                <div className="flex gap-2">
                  <Rating
                    sx={{
                      color: "#fff",
                      backgroundColor: "#68D391",
                      fontSize: 19,
                      paddingX: 1,
                    }}
                    name="read-only"
                    value={5}
                    readOnly
                  />
                  <span className="flex gap-1 items-center text-black/50 text-[14px]">
                    <CheckCircleIcon sx={{ color: "gray", fontSize: 17 }} />
                    invited
                  </span>
                </div>
                <h2 className="font-bold line-clamp-1 text-[12px] mt-4">
                  {item.title}
                </h2>
                <p className="line-clamp-3 mt-1 text-[12px] font-light">
                  {item.desc}
                </p>
                <div className="mt-6 text-[14px]">
                  <h1>
                    {item.name},{" "}
                    <span className=" text-gray-500">{item.time}</span>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-3 md:px-0 px-28 flex-col items-center md:text-[14px] text-[9px]">
        <p>
          Rated <span className="font-bold">4.7 / 5</span> based on{" "}
          <span className="underline">2,162 reviews.</span> Trust our favorite
          reviews
        </p>
        <div className="flex items-center">
          <Star sx={{ color: "#68D391" }} />
          <span>Trustpilot</span>
        </div>
      </div>
    </div>
  );
};

export default Usercarousel;
