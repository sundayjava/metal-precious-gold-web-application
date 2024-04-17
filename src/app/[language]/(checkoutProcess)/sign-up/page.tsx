import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="rounded-md md:px-16 px-4 md:w-[35%] w-[98%] py-10">
        <h1 className="text-[20px] font-bold">Welcome to GOLD AVENUE!</h1>
        <h1 className="text-[17px] font-normal">Savings made simple.</h1>
        <p className="my-5 text-[14px] font-light">
          Fill in the fields below to open your{" "}
          <span className="text-blue-400 hover-border cursor-pointer">personal account.</span>
        </p>
        <form action="">
          <div className="flex items-center md:flex-row flex-col gap-3 w-full">
            <div className="flex flex-col w-full">
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                label={
                  <p>
                    First name(s) <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
              <span className="text-red-500 italic text-[12px]"></span>
            </div>
            <div className="flex flex-col w-full">
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                label={
                  <p>
                    Last name <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
              <span className="text-red-500 italic text-[12px]"></span>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <TextField
              sx={{ width: "100%" }}
              type="email"
              id="outlined-basic"
              label={
                <p>
                  Email <span className="text-red-500">*</span>
                </p>
              }
              variant="outlined"
            />
            <span className="text-red-500 italic text-[12px]"></span>
          </div>
          <div className="flex flex-col">
            <TextField
              sx={{ width: "100%", mt: 3 }}
              type="password"
              id="outlined-basic"
              label={
                <p>
                  Password <span className="text-red-500">*</span>
                </p>
              }
              variant="outlined"
            />
            <span className="text-red-500 italic text-[12px]"></span>
          </div>
          <div className="flex mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ mt: 5 }}
                label={
                  <p className="text-[14px] font-normal">
                    I certify that I am 18 years of age or older, and that I
                    have read and accept the{" "}
                    <span className="text-blue-400 hover-border">
                      Terms and Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-400 hover-border">
                      Privacy Policy.
                    </span>
                  </p>
                }
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                sx={{ mt: 2 }}
                label={
                  <p className="text-[14px] font-normal">
                    I want to receive the GOLD AVENUE news and market insights.
                  </p>
                }
              />
            </FormGroup>
          </div>
          <button className="text-[14px] my-8 font-bold text-white py-3 px-4 bg-primaryColor rounded-md">
            Open an account
          </button>
        </form>
        <p className="text-[14px]">
          Already have an account?{" "}
          <span className="text-blue-400 hover-border cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default page;
