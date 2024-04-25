"use client";

import { Breadcrumbs, Link } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import trustpilot from "../../../../../public/trustpilot.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import { Done, Star } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FAQ from "@/app/_component/dashboardcomponent/FAQ";
import Slider from "react-slick";
import { userReviews } from "@/app/_utility/headerData";
import leftos from "../../../../../public/lefttos.webp";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";

const StorageSolution = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [active, setActive] = useState(2);
  const router = useRouter();

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

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ fontSize: 13 }}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ fontSize: 13 }}
    >
      Storage Solution
    </Link>,
  ];

  const pricingDetails = [
    {
      id: 1,
      title: "Precious metals in storage",
      amount: "Up to €100,000",
      price: "FREE",
      bullet: [
        "Start storing for free",
        "Enjoy our full storage solution",
        "Fully insured",
        "No commitment",
      ],
    },
    {
      id: 2,
      title: "Precious metals in storage",
      amount: "Up to €100,000",
      price: "€8/mo",
      bullet: [
        "Enjoy 3 months of free storage",
        "Large storage for single price",
        "Fully insured",
        "No commitment",
      ],
    },
    {
      id: 3,
      title: "Precious metals in storage",
      amount: "Above €100,000",
      price: "0.5%/YEAR",
      bullet: [
        "Custom pricing tailored to your portfolio",
        "Dedicated key amount manager",
        "Fully insured",
        "No commitment",
      ],
    },
  ];

  return (
    <div>
      <div className="md:px-[28px] px-1 w-full pb-7 bg-white">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ marginTop: 8, paddingTop: 3 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="mt-7 flex md:flex-row flex-col justify-between items-start bg-primaryColor/5 px-10 pt-10 rounded-md">
          <div className="md:w-[50%] w-full">
            <h1 className="font-bold md:text-[32px] text-[30px]">
              A secure place for your physical gold
            </h1>
            <p className="mr-12 mt-2 font-normal">
              Fully allocated, 100% VAT-free, insured, secure, simple, and
              Swiss. Get all the advantages of physical precious metals storage,
              directly online.
            </p>
            <div className="mt-11">
              <button className="text-white text-[13px] cursor-not-allowed font-bold bg-primaryColor px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white">
                Get started
              </button>
            </div>
          </div>
          <div className="md:w-[50%] w-full flex flex-col justify-end">
            <div className="flex justify-end">
              <Image
                src={trustpilot}
                alt="trustpilot"
                className="object-contain rounded-md"
                width={100}
                height={30}
              />
            </div>
            <Image
              src="https://www.goldavenue.com/_next/image?url=%2Fimages%2Fstorage-solution%2Fgold-1kg.png&w=3840&q=75"
              alt="trustpilot"
              className="object-contain rounded-md w-[80%] h-[300px]"
              width={100}
              height={20}
            />
          </div>
        </div>
        <div className="mt-16 flex md:flex-row flex-col justify-between items-start px-10 pt-10 rounded-md">
          <div className="md:w-[50%] w-full">
            <h1 className="font-bold md:text-[32px] w-[60%] text-[27px]">
              Why not enjoy VAT-free products?
            </h1>
            <p className="mr-12 mt-2 font-normal">
              All our products are VAT-free. Save the 8.1% Swiss VAT on Silver,
              Platinum, and Palladium.
            </p>
            <div className="mt-11 md:mb-0 mb-5">
              <button
                onClick={() => router.push("/en/buy/gold")}
                className="text-white text-[15px] font-bold bg-primaryColor px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white"
              >
                Discover VAT_FREE Products
              </button>
            </div>
          </div>
          <div className="md:w-[50%] w-full flex flex-col justify-end">
            <Image
              src="https://www.goldavenue.com/_next/image?url=%2Fimages%2Fsilver-landing%2Fsilver-kilo.png&w=750&q=75"
              alt="trustpilot"
              className="object-contain rounded-md w-[80%] h-[250px]"
              width={100}
              height={20}
            />
          </div>
        </div>

        <div className="md:my-40 my-14">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold md:text-[32px] wmd:-[60%] w-full text-[27px] text-center">
              Enjoy simple pricing
            </h1>
            <p className="mr-12 mt-2 font-normal md:text-start text-center">
              We believe pricing should remain transparent and affordable for
              everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-16 items-start px-3 gap-10">
            {pricingDetails.map((item) => (
              <div key={item.id}>
                {item.id === 2 ? (
                  <div className="flex justify-center">
                    <div className=" bg-gray-200 h-[20px] w-[90%] pb-8 pt-3">
                      <p className="text-[13px] text-center">
                        3 MONTHS FOR FREE
                      </p>
                    </div>
                  </div>
                ) : null}
                <div
                  onClick={() => setActive(item.id)}
                  className={` shadow-sm rounded-lg ${
                    active === item.id
                      ? "border-primaryColor border-2 shadow-lg"
                      : ""
                  } hover:border-primaryColor hover:border-2 border py-12 px-5 text-center hover:shadow-lg cursor-pointer`}
                >
                  <h1 className="text-[12px] text-center">{item.title}</h1>
                  <p className="text-[20px] font-normal mt-3">{item.amount}</p>
                  <h1
                    className={`${
                      active === item.id ? "text-primaryColor" : ""
                    } my-20 text-[28px] font-bold hover:text-primaryColor`}
                  >
                    {item.price}
                  </h1>
                  <ul className="ml-10 text-[13px] font-light">
                    {item.bullet.map((data) => (
                      <div key={item.id} className="flex gap-2">
                        <Done
                          sx={{
                            fontSize: 14,
                            color: active === item.id ? "#FD7E14" : "inherit",
                          }}
                        />
                        <li>{data}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-20 bg-primaryColor text-white rounded-md md:p-10 p-2">
          <h1 className="font-bold md:text-[32px] text-center text-[20px]">
            Choose a secure and renowned partner
          </h1>
          <div className="gap-10 items-center  flex md:flex-row flex-col justify-between mt-12">
            <div className="md:w-[50%] w-full">
              <Image
                src={leftos}
                alt="pamp"
                className="w-[100%] h-full object-contain"
              />
            </div>
            <div className="md:w-[50%] w-full">
              <h1 className="text-[20px] font-bold">
                WARET GOLD is a Swiss-regulated company, part of the MKS PAMP
                GROUP.
              </h1>
              <p className="mt-8 md:w-[75%] w-full text-[18px]">
                With offices across 12 countries, the MKS PAMP GROUP is the
                world leader in precious metals and the most accredited group in
                the industry.
              </p>
              <p className="md:w-[75%] w-full text-[18px]">
                It comprises two leading LBMA precious metals refineries (MKS
                PAMP & MMTC-PAMP), a trading company (MKS PAMP), a bullion
                distributor (MTB), and an online precious metals retailer (WARET
                GOLD).
              </p>
              <div className="mt-11">
                {auth.currentUser ? (
                  <button
                    disabled
                    className="bg-white text-[13px] cursor-not-allowed font-bold text-primaryColor px-10 py-3 rounded-md hover:bg-primaryColor hover:text-white"
                  >
                    Open an account
                  </button>
                ) : (
                  <button className="bg-white text-[13px] font-bold text-primaryColor px-10 py-3 rounded-md hover:bg-primaryColor hover:text-white">
                    Open an account
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
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

        <div className="flex justify-center">
          <div className="md:w-[90%] lg:w-[85%] xl:w-[80%] w-full">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageSolution;
