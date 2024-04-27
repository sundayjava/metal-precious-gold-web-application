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

  const handleRemoveCartItem = async (
    value: number,
    quantity: number,
    cartitemid: string
  ) => {
    if (auth.currentUser?.email) {
      try {
        const user = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );

        const response = await fetch("/api/cart/addcartitem", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartitemid: cartitemid,
            userId: user.data.id,
            quantity: quantity - value,
          }),
        });
        if (response.ok) {
          getCartItem(auth.currentUser?.email, setCartData);
        } else {
          alert("Something went wrong, please try again");
        }
      } catch (error) {
        console.error("Error updating item:", error);
      }
    }
  };

  const handleUpdateCartItem = async (
    value: number,
    quantity: number,
    cartitemid: string
  ) => {
    if (auth.currentUser?.email) {
      try {
        const user = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );

        const response = await fetch("/api/cart/addcartitem", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartitemid: cartitemid,
            userId: user.data.id,
            quantity: quantity + value,
          }),
        });
        if (response.ok) {
          getCartItem(auth.currentUser?.email, setCartData);
        } else {
          alert("Something went wrong, please try again");
        }
      } catch (error) {
        console.error("Error updating item:", error);
      }
    }
  };

  return (
    <div className="xl:px-[150px] lg:px-[50px] md:px-[20px] px-1 pt-8 w-full overflow-hidden">
      <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] pt-10 font-[400] max-w-[750px]">
        Cart
      </p>
      <div className="flex justify-between md:flex-row flex-col w-full items-center my-8 px-10">
        <h1 className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px]">
          {cartData?.data.cartItems.length} product(s) in your cart
        </h1>
        <button
          onClick={() => router.push("/")}
          className="border md:mt-0 mt-2 border-primaryColor hover:bg-primaryColor hover:text-white leading-[28px] text-[20px] text-darkaccent font-[700] rounded-md px-5 py-1"
        >
          Continue shopping
        </button>
      </div>
      <div className="flex md:flex-row flex-col-reverse jmd:ustify-center md:items-start gap-5 w-full">
        <div className="md:w-[65%] w-full bg-white rounded-md border-l-[8px] border-primaryColor md:p-10 p-3">
          <p className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[26px]">
            Your order
          </p>
          {cartData?.data.cartItems ? (
            <div className="flex flex-col justify-center">
              {cartData?.data.cartItems.map((item) => {
                localStorage.setItem("cartItemId", item.id);
                return (
                  <div key={item.id} className="border-t py-6">
                    <div className="flex justify-center md:gap-5 gap-3 items-center">
                      <div className="flex md:gap-2 gap-1 items-center w-[55%]">
                        <div className="w-[80px] h-[80px]">
                          <Image
                            src={item.product.imageUrl[1]}
                            alt="dp"
                            width={50}
                            height={25}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-decoration-none text-darkaccent leading-[28px] text-[14px] font-[400]">
                          {item.product.title}
                        </p>
                      </div>
                      <div className="flex gap-4 items-center w-[21%]">
                        <button
                          onClick={() =>
                            handleRemoveCartItem(1, item.quantity, item.id)
                          }
                          className="md:w-8 w-4 md:h-8 h-4 flex items-center justify-center hover:bg-slate-400 md:rounded-md rounded-sm bg-slate-200"
                        >
                          -
                        </button>
                        <p className="md:text-[16px] text-[13px]">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            handleUpdateCartItem(1, item.quantity, item.id)
                          }
                          className="md:w-8 w-4 md:h-8 h-4 flex items-center justify-center hover:bg-slate-400 md:rounded-md rounded-sm bg-slate-200"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex md:flex-row flex-col gap-2 items-center w-[24%]">
                        <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400]">
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
                    <div className="flex mt-10 ml-10 font-extralight items-center text-[13px]">
                      <FavoriteBorder sx={{ fontSize: 22, color: "#c1c2c5" }} />
                      <p className="hover-border cursor-pointer"></p>
                    </div>
                  </div>
                );
              })}
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
              <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px]">
                Payment method
              </p>
              {auth.currentUser ? null : (
                <p className="mt-3 text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px]">
                  Sign in to select a payment method
                </p>
              )}
              {auth.currentUser ? (
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
                          <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400] max-w-[750px]">
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
                          <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400] max-w-[750px]">
                            Bitcoin
                          </p>
                        }
                        // onChange={(e) =>
                        //   handleRadioFilterChange(section.id, e)
                        // }
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              ) : null}
            </div>
            <div>
              <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px]">
                Storage & Delivery
              </p>
              <button className="md:text-[12px] text-[9px] grdientBtn text-white px-3 py-[2px] ml-10 mt-10 rounded-full">
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
                          <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400] max-w-[750px]">
                            Insured Storage
                          </p>
                          <p className="text-decoration-none text-darkaccent leading-[28px] text-[16px] font-[400] max-w-[750px]">
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
                          <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400] max-w-[750px]">
                            Shipping Delivery details
                          </p>
                          <p className="text-decoration-none text-darkaccent leading-[28px] text-[17px] font-[400] max-w-[750px]">
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
        <div className="md:w-[35%] w-full bg-white rounded-md md:p-5 p-2">
          <p className="text-decoration-none text-darkaccent leading-[46px] text-[25px] font-[700] mb-[26px]">
            Order summary
          </p>
          <div className="mt-10 text-decoration-none text-darkaccent leading-[28px] text-[14px] font-[400] flex justify-between items-center max-w-[750px]">
            <p>Products ({cartData?.data.cartItems.length})</p>
            <p className="text-decoration-none text-darkaccent leading-[28px] text-[18px] font-[600] max-w-[750px]">
              €{cartData?.data.totalPrice}
            </p>
          </div>
          <div className="mb-10 mt-2 text-decoration-none text-darkaccent leading-[28px] text-[14px] font-[400] flex justify-between items-center max-w-[750px]">
            <p>Priority payment (3%)</p>
            <p className="text-decoration-none text-darkaccent leading-[28px] text-[18px] font-[600] max-w-[750px]">
              €{cartData?.data.discount}
            </p>
          </div>
          <hr />
          <div className="my-10">
            <div className="flex text-decoration-none text-darkaccent leading-[28px] text-[16px] font-[600] max-w-[750px] justify-between items-center">
              <p>Total</p>
              <p>€{cartData?.data.totalPrice}</p>
            </div>
            <p className="text-decoration-none text-darkaccent leading-[28px] text-[16px] pt-2 font-[400] max-w-[750px]">
              Incl. taxes
            </p>
          </div>
          {!auth.currentUser ? (
            <button
              onClick={() =>
                router.push(`/${localStorage.getItem("lang")}/login`)
              }
              className="w-full py-2 grdientBtn rounded-md text-[14px] text-white mb-10"
            >
              Sign in to continue
            </button>
          ) : (
            <button
              onClick={() =>
                router.push(`/${localStorage.getItem("lang")}/storage-shipping`)
              }
              className="w-full py-2 grdientBtn rounded-md text-[14px] text-white mb-10"
            >
              Proceed to checkout
            </button>
          )}
          {!auth.currentUser ? (
            <p className="flex flex-col gap-2 font-[500] lg:text-[16px] text-[12px] items-center">
              First time on WARET GOLD?{" "}
              <span className="hover-border cursor-pointer">
                Open an account
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
