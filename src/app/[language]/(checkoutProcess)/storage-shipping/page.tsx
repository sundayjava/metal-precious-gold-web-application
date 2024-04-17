"use client";

import BillingAddress from "@/app/_component/checkout-components/BillingAddress";
import Delivery from "@/app/_component/checkout-components/Delivery";
import PaymentReviews from "@/app/_component/checkout-components/PaymentReviews";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import React from "react";

const steps = ["Storage & Delivery", "Billing Address", "Payment"];

const page = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="xl:px-[200px] lg:px-[100px] md:px-[40px] px-4 mt-8 w-full mb-10">
      <button className="text-[14px] font-extralight px-10 flex gap-1 items-center">
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
          ) : activeStep === 1 ? (
            <BillingAddress nextStep={handleNext} />
          ) : (
            <PaymentReviews finalStep={handleNext} />
          )}
        </Box>
      </div>
    </div>
  );
};

export default page;
