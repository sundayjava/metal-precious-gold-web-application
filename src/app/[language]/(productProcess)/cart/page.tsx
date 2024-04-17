"use client";

import Image from "next/image";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { FavoriteBorder } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const page = () => {
  return (
    <div className="xl:px-[200px] lg:px-[100px] md:px-[40px] px-4 w-full">
      <p className="text-[14px] font-extralight px-10">Cart</p>
      <div className="flex justify-between w-full items-center my-8 px-10">
        <h1 className="font-bold text-[25px] ">2 product(s) in your cart</h1>
        <button className="border border-primaryColor text-[14px] rounded-md px-5 py-1">
          Continue shopping
        </button>
      </div>
      <div className="flex justify-center items-start gap-5">
        <div className="w-[70%] bg-white rounded-md border-l-[8px] border-primaryColor p-10">
          <p className="font-bold mb-8">Your order</p>
          <div className="flex flex-col justify-center">
            {[1, 1].map((item) => (
              <div key={item} className="border-t py-6">
                <div className="grid grid-cols-4 justify-center gap-8 items-center">
                  <div className="flex gap-2 items-start col-span-2">
                    <Image
                      src="https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2441%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Au_certipamp_front.webp&w=48&q=75"
                      alt="dp"
                      width={50}
                      height={25}
                    />
                    <p className="">
                      1 ounce Gold Bar - Lady Fortuna 45th Anniversary
                    </p>
                  </div>
                  <div className="flex gap-4 items-center col-span-1">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-400 rounded-md bg-slate-200">
                      -
                    </button>
                    <p>1</p>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-400 rounded-md bg-slate-200">
                      +
                    </button>
                  </div>
                  <div className=" col-span-1 flex gap-4 items-center">
                    <p>€2,353.21</p>
                    <div className="text-light">
                      <DeleteOutlinedIcon
                        sx={{
                          fontSize: 22,
                          cursor: "pointer",
                          color: "gray",
                          ":hover": { color: "pink" },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-10 font-extralight items-center text-[13px]">
                  <FavoriteBorder sx={{ fontSize: 15 }} />
                  <p className="hover-border cursor-pointer">Add to wishlist</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-start mt-10">
            <div>
              <p className="font-bold">Payment method</p>
              <p className="mt-3 font-extralight text-[13px]">
                Sign in to select a payment method
              </p>
              <div className="flex gap-3 items-center mt-6">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label={<p>Bank transfer</p>}
                      // onChange={(e) =>
                      //   handleRadioFilterChange(section.id, e)
                      // }
                    />
                    <div className="my-2" />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label={<p>Bitcoin</p>}
                      // onChange={(e) =>
                      //   handleRadioFilterChange(section.id, e)
                      // }
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div>
              <p className="font-bold">Storage & Delivery</p>
              <button className="text-[12px] bg-primaryColor text-white px-3 py-[2px] ml-10 mt-10 rounded-full">VAT-FREE</button>
              <div className="flex gap-3 items-center mt-6">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label={
                        <div>
                          <p>Insured Storage</p>
                          <p>Estimated storage fees: FREE</p>
                        </div>
                      }
                      // onChange={(e) =>
                      //   handleRadioFilterChange(section.id, e)
                      // }
                    />
                    <div className="my-4" />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label={
                        <div>
                          <p>Shipping Delivery details</p>
                          <p>4-15 business days</p>
                        </div>
                      }
                      // onChange={(e) =>
                      //   handleRadioFilterChange(section.id, e)
                      // }
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-white rounded-md p-8">
          <p className="font-bold">Order summary</p>
          <div className="mt-10 flex justify-between items-center font-light text-[14px]">
            <p>Products (2)</p>
            <p>€2,803.70</p>
          </div>
          <div className="mb-10 mt-2 flex justify-between items-center font-light text-[14px]">
            <p>Priority payment (3%)</p>
            <p>€85.16</p>
          </div>
          <hr />
          <div className="my-10">
            <div className="flex font-bold justify-between items-center text-[14px]">
              <p>Total</p>
              <p>€2,803.70</p>
            </div>
            <p className="font-light text-[14px]">Incl. taxes</p>
          </div>
          <button className="w-full py-2 bg-primaryColor rounded-md text-[14px] text-white mb-10">
            Sign in to continue
          </button>
          <p className="flex flex-col gap-2 font-[500] items-center">
            First time on WARET GOLD?{" "}
            <span className="hover-border cursor-pointer">Open an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
