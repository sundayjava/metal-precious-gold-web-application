"use client";

import { Breadcrumbs, Link } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import trustpilot from "../../../../../public/trustpilot.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Map from "@/app/_component/Map/Map";
import FAQ from "@/app/_component/dashboardcomponent/FAQ";

const AboutUsPage = () => {

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
      About us
    </Link>,
  ];

  const ceodata = [
    {
      id: 1,
      img: "https://th.bing.com/th?id=OIF.VQyvgU%2bt8aAfimw01RVxKQ&rs=1&pid=ImgDetMain",
      heading: "Buy gold with confidence",
      body: "With our team of twenty dedicated experts, we aim to offer the new generation a trustable and transparent solution. The mission of WARET GOLD is to propose an easy and secure access to the most iconic product ever cherished by humankind, GOLD.",
      name: "Max A. Soldati",
      position: "Chief Executive Officer",
    },
    {
      id: 2,
      img: "https://th.bing.com/th/id/OIP.e6ZrbVPkt3bSSz7s9GWjvAAAAA?w=425&h=425&rs=1&pid=ImgDetMain",
      heading: "From the ground to your hand",
      body: "With more than 60 years in the industry, our group has always searched for innovative ways to move across the value chain to better serve our customers. With the creation of WARET GOLD, we wanted to get closer to our end clients in order to serve them straight from the source and directly share with them our passion for precious metals.",
      name: "Edward Anselem",
      position: "Founder",
    },
  ];

  return (
    <>
      <div className="lg:px-[80px] bg-white md:px-[28px] px-1 w-full pb-7">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ marginTop: 8, paddingTop: 3 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="mt-7 flex md:flex-row flex-col justify-between items-start">
          <div className="md:w-[60%] w-full">
            <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[36px] font-[700] mb-[24px]">
              Your trustworthy GOLD partner
            </h1>
            <p className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] max-w-[850px]">
              WARET GOLD is the official online retailer of MKS PAMP GROUP, the
              worldwide leader in the precious metal industry.
            </p>
          </div>
         
        </div>
        <div className="md:mt-10 mt-1 rounded-lg">
          <Map />
        </div>
        <div className="mt-12 md:w-[55%] w-full">
          <p className="text-decoration-none text-darkaccent leading-[46px] text-[36px] font-[700] mb-[24px]">People at WARET GOLD</p>
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[20px] font-[400] max-w-[750px]">
            WARET GOLD is composed of a team of thirty experts who aim to offer
            the most transparent and accessible solution when it comes to your
            gold.
          </p>
        </div>
        <div className="mt-10 flex md:flex-row flex-col justify-center items-start md:gap-16 gap-7">
          {ceodata.map((item) => (
            <div
              key={item.id}
              className="md:w-[40%] w-full flex items-start gap-5"
            >
              <Image
                src={item.img}
                alt="images"
                className=" object-contain rounded-md"
                width={100}
                height={30}
              />
              <div>
                <p className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[700] max-w-[750px]">{item.heading}</p>
                <p className="text-decoration-none text-darkaccent leading-[32px] mt-5 font-[400] max-w-[750px]">{item.body}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-decoration-none text-darkaccent leading-[32px] font-[700] max-w-[750px] mt-5">{item.name}</p>
                    <p className="text-decoration-none text-darkaccent leading-[32px]font-[400] max-w-[750px]">{item.position}</p>
                  </div>
                  <LinkedInIcon sx={{ color: "#FA7617" }} />
                </div>
              </div>
            </div>
          ))}

        </div>
        <hr/>
        <div className="flex justify-center">
          <div className="w-full">
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
