"use client";

import { Breadcrumbs, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const WalletPayment = () => {
  const router = useRouter();

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
      Profile
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ fontSize: 13 }}
    >
      Payment/Withdrawal
    </Link>,
  ];

  return (
    <div>
      <div>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ marginTop: 8, paddingTop: 3 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <h1 className="text-decoration-none pt-10 text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
          Payment/Withdrawal
        </h1>
        <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
          Manage your default payment preferences.
        </p>
        <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[20px]">
          Personal payment information
        </p>
        <div className="flex justify-between items-center md:flex-row flex-col py-14 md:px-10 rounded-md px-3 shadow-lg bg-primaryColor/5">
          <div>
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
              Your currency:
            </p>
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[30px]">
              Not defined
            </p>
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
              This is the currency used for all your transactions on WARET GOLD.
            </p>
          </div>
          <div>
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
              Your personal reference number:
            </p>
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[30px]">
              Not defined
            </p>
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
              Please include this number in your online banking during all your
              wire transfer payments and deposits on WARET GOLD Pay. We need it
              to match the funds you transfer with your WARET GOLD account.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">
            Stored Product
          </p>
          <div className="py-14 px-10 shadow-lg bg-white rounded-md">
            <p className="text-center text-decoration-none text-darkaccent leading-[32px] text-[16px] font-[400] max-w-[750px]">
              There is no stored product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPayment;
