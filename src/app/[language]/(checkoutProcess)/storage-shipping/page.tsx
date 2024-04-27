"use client";

import BillingAddress from "@/app/_component/checkout-components/BillingAddress";
import Delivery from "@/app/_component/checkout-components/Delivery";
import PaymentOptions from "@/app/_component/checkout-components/PaymentOptions";
import PaymentReviews from "@/app/_component/checkout-components/PaymentReviews";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const steps = [
  "Storage & Delivery",
  "Billing Address",
  "Payment Method",
  "Order Summary",
];

const StorageShipping = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="xl:px-[180px] lg:px-[80px] md:px-[34px] px-0 md:mt-8 mt-3 w-full mb-10">
      <button
        onClick={() => router.push("/")}
        className="text-decoration-none text-darkaccent leading-[28px] flex gap-3 items-center text-[20px] pt-10 font-[400] max-w-[750px]"
      >
        <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 20, color: "gray" }} />
        Go back to cart
      </button>
      <div className="flex justify-center items-center my-5">
        <p className="text-decoration-none text-darkaccent leading-[28px] text-[26px] font-[700] max-w-[750px]">
          Checkout
        </p>
      </div>
      <div className="md:w-[80%] w-full inline-block lg:px-12 md:px-7 px-2">
        <Box>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === 0 ? (
            <Delivery nextStep={handleNext} />
          ) : activeStep === 1 ? (
            <BillingAddress nextStep={handleNext} />
          ) : activeStep === 2 ? (
            <PaymentOptions/>
          ) : (
            <PaymentReviews finalStep={handleNext} />
          )}
        </Box>
      </div>
    </div>
  );
};

export default StorageShipping;
