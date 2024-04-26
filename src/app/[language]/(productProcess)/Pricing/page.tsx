"use client";

import { Breadcrumbs, Link } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import trustpilot from "../../../../../public/trustpilot.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import resel from "../../../../../public/resel.png";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const PricingPage = () => {

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
      Pricing
    </Link>,
  ];

  const paymentData = [
    {
      id: 1,
      img: <SwapHorizIcon sx={{ fontSize: 70, color: "#FD7E14" }} />,
      heading: "Wire transfer",
      sub: "(free)",
      body: "Bank transfers are free at WARET GOLD (no additional fees). This payment method is only allowed for orders between €100.00 and €100,000.00. Your invoice must be paid immediately after placing your order. WARET GOLD cannot be held responsible for any conversion or reversal fees charged by your bank.",
    },
    {
      id: 2,
      img: <MonetizationOnIcon sx={{ fontSize: 70, color: "#FD7E14" }} />,
      heading: "WARET GOLD Pay",
      sub: "(free)",
      body: "WARET GOLD Pay is our instant payment and withdrawal solution. Free and secure, you can top it up with a simple wire transfer before placing your order. Your funds will be credited to your account within 1-3 business days (your bank may apply transfer fees for which you are responsible).",
    },
    {
      id: 3,
      img: <CreditCardIcon sx={{ fontSize: 70, color: "#FD7E14" }} />,
      heading: "Credit card",
      sub: "(3% surcharge)",
      body: "You can make purchases with any credit or debit card supporting «3D Secure». To determine if your card supports 3D Secure, directly contact your card provider. A credit card lets you purchase instantly without the delays of a bank transfer. The 3% surcharge fee allows for priority payment.",
    },
  ];

  return (
    <div>
      <div className="md:px-[28px] px-1 w-full pb-7">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ marginTop: 8, paddingTop: 3 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="mt-7 flex md:flex-row flex-col justify-between items-start">
          <div className="md:w-[50%] w-full">
            <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
              SIMPLE and TRANSPARENT pricing
            </h1>
            <p className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] max-w-[750px]">
              Buy, store, sell. Gold with no hidden costs.
            </p>
          </div>
        </div>

        <div className="bg-primaryColor/5 w-full px-5 py-10 my-10">
          <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
            Store physical gold at a simple price
          </h1>
          <div className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] max-w-[750px]">
            <p>
              Start with{" "}
              <span className="font-bold">
                free storage for up to €10,000 in precious metals.
              </span>
            </p>
            <p>
              After that,{" "}
              <span className="font-bold">
                enjoy a single-price for your storage
              </span>{" "}
              up to €100,000 in precious metals.
            </p>
            <p>With insurance included and without commitment.</p>
          </div>
          <div className="grid grid-cols-4 gap-1 md:w-[70%] w-full mt-14">
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] font-normal">
                Precious metals in storage
              </p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] font-normal">Up to €10,000</p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] font-normal">Up to €100,000</p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] font-normal">Above €100,000</p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] font-normal">Storage price</p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] text-primaryColor font-bold">FREE</p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] text-primaryColor font-bold">8 €/mo</p>
            </div>
            <div className="md:px-5 px-2 md:py-5 py-2 bg-white">
              <p className="md:text-[18px] text-[12px] text-primaryColor font-bold">0.5%/year</p>
            </div>
          </div>
          <Link href="https://www.youtube.com/watch?v=uGXRCvrlZnE" className="flex gap-3 items-center text-accent mt-10">
            <YouTubeIcon />
            <p className="hover-border cursor-pointer">How to store precious metals with WARET GOLD?</p>
          </Link>
        </div>

        <div className=" w-full px-3 py-10 my-10">
          <p className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px] max-w-[560px]">
            Resell without commission
          </p>
          <div className="flex justify-between md:flex-row flex-col items-center">
            <div className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] md:max-w-[600px]">
              <p className="font-bold mb-2">
                We charge 0% commission fee upon resale
              </p>
              <p>
                You can easily resell your stored products to WARET GOLD at
                spot price (the current market price). We buy them back
                instantly and apply no commission fees. At your request, we then
                wire the amount to your bank account.
              </p>
            </div>
            <div className="md:w-[50%] w-full md:mt-0 mt-6">
              <Image src={resel} alt="ujhbnol" className="" />
            </div>
          </div>
          <Link href="https://www.youtube.com/watch?v=uGXRCvrlZnE" className="flex gap-3 items-center text-accent mt-7">
            <YouTubeIcon />
            <p className="hover-border cursor-pointer">How to sell your precious metals?</p>
          </Link>
        </div>

        <div className="w-full px-5 py-10 my-10 bg-primaryColor/5">
          <div className="md:w-[50%] w-full">
            <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
              Choose your payment method
            </h1>
            <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] md:mb-8 mb-10 font-[400] max-w-[750px]">
              WARET GOLD currently accepts payments in USD, EUR, GBP, and CHF.
              You can pay either by wire transfer, WARET GOLD Pay or credit
              card.
            </p>
          </div>

          <div className="flex justify-center gap-10 px-3 md:flex-row flex-col">
            {paymentData.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div>{item.img}</div>
                <p className="text-[20px] font-[700] leading-[36px] text-darkaccent hover:text-accent">
                  {item.heading}
                  <span className="font-light"> {item.sub}</span>
                </p>
                <p className="mt-4 text-[18px] leading-[20px] font-[400] h-[150px] hover:text-accent text-darkaccent">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
