"use client"

import { useRouter } from "next/navigation";
import React from "react";

const Wallet = () => {
  const router = useRouter();
  return (
    <div className="pt-16">
      <div>
        <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
          WALLET
        </h1>
        <div className="flex justify-between items-center md:flex-row flex-col py-14 md:px-10 rounded-md px-3 shadow-lg bg-primaryColor/5">
          <div>
            <p className="text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">WARET GOLD pay balance</p>
            <button
              onClick={() => router.push("/")}
              className="text-white text-[13px] my-2 font-bold grdientBtn px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white"
            >
              Deposit
            </button>
            <p className="text-decoration-none text-accent hover:text-secondaryColor leading-[32px] text-[14px] font-[400] max-w-[750px]">Manage GA Pay</p>
          </div>
          <div>
            <p className="text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">Value of stored product</p>
            <button
              onClick={() => router.push("/")}
              className="text-white text-[13px] my-2 font-bold grdientBtn px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white"
            >
              Discover our product
            </button>
          </div>
          <div>
            <p className="text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">Purchase limit</p>
            <p
              className="text-decoration-none text-darkaccent leading-[46px] text-[24px] font-[700] mb-[24px]"
            >
              CHF 15,000
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">Stored Product</p>
          <div className="py-14 px-10 shadow-lg bg-white rounded-md">
            <p className="text-center text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">There is no stored product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
