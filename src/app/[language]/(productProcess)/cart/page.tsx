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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CartData, getCartItem } from "@/app/_utility/apicall";
import { auth } from "@/config/firebase";
import axios from "axios";
import { User } from "@/app/_utility/user";

const CartPage = () => {
  const router = useRouter();
  const [cartData, setCartData] = useState<CartData | null>(null);

  useEffect(() => {
    getCartItem(auth.currentUser?.email, setCartData);
  }, []);

  const deleteCartItem = async (cartitemid: string) => {
    if (auth.currentUser?.email) {
      try {
        const user = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );

        const response = await fetch("/api/cart/addcartitem", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartitemid: cartitemid,
            userId: user.data.id,
          }),
        });
        if (response.ok) {
          alert("Data deleted successfully");
          getCartItem(auth.currentUser?.email, setCartData);
        } else {
          alert("Data cannot be deleted");
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Something went wrong. Please try again");
      }
    }
  };

  return (
    <div className="xl:px-[170px] lg:px-[70px] md:px-[30px] px-1 w-full overflow-hidden">
      <p className="text-[14px] font-extralight md:px-10 px-2">Cart</p>
      <div className="flex justify-between md:flex-row flex-col w-full items-center my-8 px-10">
        <h1 className="font-bold md:text-[25px] ">
          {cartData?.data.cartItems.length} product(s) in your cart
        </h1>
        <button
          onClick={() => router.push("/")}
          className="border md:mt-0 mt-2 border-primaryColor hover:bg-primaryColor hover:text-white text-[14px] rounded-md px-5 py-1"
        >
          Continue shopping
        </button>
      </div>
      <div className="flex md:flex-row flex-col-reverse jmd:ustify-center md:items-start gap-5 w-full">
        <div className="md:w-[70%] w-full bg-white rounded-md border-l-[8px] border-primaryColor md:p-10 p-3">
          <p className="font-bold mb-8">Your order</p>
          {cartData?.data.cartItems ? (
            <div className="flex flex-col justify-center">
              {cartData?.data.cartItems.map((item) => (
                <div key={item.id} className="border-t py-6">
                  <div className="grid grid-cols-4 justify-center md:gap-8 gap-3 items-center">
                    <div className="flex md:gap-2 gap-1 items-start col-span-2">
                      <Image
                        src="https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2441%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Au_certipamp_front.webp&w=48&q=75"
                        alt="dp"
                        width={50}
                        height={25}
                      />
                      <p className="md:text-[16px] text-[12px]">
                        {item.product.title}
                      </p>
                    </div>
                    <div className="flex gap-4 items-center col-span-1">
                      <button className="md:w-8 w-4 md:h-8 h-4 flex items-center justify-center hover:bg-slate-400 md:rounded-md rounded-sm bg-slate-200">
                        -
                      </button>
                      <p className="md:text-[16px] text-[13px]">
                        {item.quantity}
                      </p>
                      <button className="md:w-8 w-4 md:h-8 h-4 flex items-center justify-center hover:bg-slate-400 md:rounded-md rounded-sm bg-slate-200">
                        +
                      </button>
                    </div>
                    <div className="col-span-1 flex md:flex-row flex-col md:gap-4 gap-1 items-center">
                      <p className="text-[12px] font-bold md:font-normal md:text-[16px]">
                        €{item.price}
                      </p>
                      <div
                        className="text-light"
                        onClick={() => deleteCartItem(item.id)}
                      >
                        <DeleteOutlinedIcon
                          sx={{
                            fontSize: 20,
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
                    <p className="hover-border cursor-pointer">
                      Add to wishlist
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-8">
              <p className="text-[15px] font-light">
                You dont have any item in your cart
              </p>
            </div>
          )}
          <div className="flex justify-between items-start mt-10">
            <div>
              <p className="font-bold md:text-[16px] text-[13px]">
                Payment method
              </p>
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
                      label={
                        <p className="md:text-[16px] text-[13px]">
                          Bank transfer
                        </p>
                      }
                      // onChange={(e) =>
                      //   handleRadioFilterChange(section.id, e)
                      // }
                    />
                    <div className="my-2" />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label={
                        <p className="md:text-[16px] text-[13px]">Bitcoin</p>
                      }
                      // onChange={(e) =>
                      //   handleRadioFilterChange(section.id, e)
                      // }
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div>
              <p className="font-bold md:text-[16px] text-[13px]">
                Storage & Delivery
              </p>
              <button className="md:text-[12px] text-[9px] bg-primaryColor text-white px-3 py-[2px] ml-10 mt-10 rounded-full">
                VAT-FREE
              </button>
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
                          <p className="md:text-[16px] text-[13px]">
                            Insured Storage
                          </p>
                          <p className="md:text-[16px] text-[12px] font-light">
                            Estimated storage fees: FREE
                          </p>
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
                          <p className="md:text-[16px] text-[13px]">
                            Shipping Delivery details
                          </p>
                          <p className="md:text-[16px] text-[12px] font-light">
                            4-15 business days
                          </p>
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
        <div className="md:w-[30%] w-full bg-white rounded-md md:p-6 p-2">
          <p className="font-bold">Order summary</p>
          <div className="mt-10 flex justify-between items-center font-light text-[14px]">
            <p>Products ({cartData?.data.cartItems.length})</p>
            <p>€{cartData?.data.discount}</p>
          </div>
          <div className="mb-10 mt-2 flex justify-between items-center font-light text-[14px]">
            <p>Priority payment (3%)</p>
            <p>€{cartData?.data.totalPrice}</p>
          </div>
          <hr />
          <div className="my-10">
            <div className="flex font-bold justify-between items-center text-[14px]">
              <p>Total</p>
              <p>€{cartData?.data.discount}</p>
            </div>
            <p className="font-light text-[14px]">Incl. taxes</p>
          </div>
          {!auth.currentUser ? (
            <button
              onClick={() =>
                router.push(`/${localStorage.getItem("lang")}/login`)
              }
              className="w-full py-2 bg-primaryColor rounded-md text-[14px] text-white mb-10"
            >
              Sign in to continue
            </button>
          ) : (
            <button
              onClick={() =>
                router.push(`/${localStorage.getItem("lang")}/storage-shipping`)
              }
              className="w-full py-2 bg-primaryColor rounded-md text-[14px] text-white mb-10"
            >
              Proceed to checkout
            </button>
          )}
          <p className="flex flex-col gap-2 font-[500] lg:text-[16px] text-[12px] items-center">
            First time on WARET GOLD?{" "}
            <span className="hover-border cursor-pointer">Open an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
