"use client";

import Delivery from "@/app/_component/checkout-components/Delivery";
import PaymentReviews from "@/app/_component/checkout-components/PaymentReviews";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const steps = ["Storage & Delivery", "Order Summary"];

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
        className="text-[14px] font-extralight px-10 md:mt-0 mt-4 flex gap-1 items-center"
      >
        <ArrowCircleLeftOutlinedIcon sx={{ fontSize: 16, color: "gray" }} />
        Go back to cart
      </button>
      <div className="flex justify-center items-center my-5">
        <p className="text-[20px] font-bold">Checkout</p>
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
          )  : (
            <PaymentReviews finalStep={handleNext} />
          )}
        </Box>
      </div>
    </div>
  );
};

export default StorageShipping;
