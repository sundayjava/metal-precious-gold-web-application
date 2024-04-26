"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { ChangeEvent, useEffect, useState } from "react";
import CopyButton from "../globalcomponent/CopyBtn";
import Image from "next/image";
import { auth, storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { User } from "@/app/_utility/user";
import { useRouter } from "next/navigation";
import { CartData, getCartItem } from "@/app/_utility/apicall";

const PaymentReviews = (props: { finalStep: any }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [cartData, setCartData] = useState<CartData | null>(null);

  // const paymentMethods = [
  //   {
  //     id: 1,
  //     title: "Bitcoin",
  //     desc: "hbjwe882u012bjbd980u09eu02ejbsfs8u108ue082jve-eff",
  //   },
  //   {
  //     id: 2,
  //     title: "Bank Transfer",
  //     desc: "9079029135",
  //   },
  // ];

  const deleteCartItem = async (cartId: any) => {
   try {
        await fetch("/api/cart", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartId: cartId,
          }),
        });
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Something went wrong. Please try again");
      
    }
  };

  const placeOrder = async () => {
    if (auth.currentUser?.email) {
      try {
        const user = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );

        console.log("user data ", user);

        const response = await fetch("/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user.data.id }),
        });
        const data = await response.json();

        console.log("order items ", data);

        if (data.success === true) {
          deleteCartItem(cartData?.data.id);
          alert(
            "Order placed. Check your mail to make payment and recieve your order. Thanks!"
          );
          router.push("/");
        } else {
          alert(data.data);
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Something went wrong. Please try again");
      }
    }
  };

  useEffect(() => {
    getCartItem(auth.currentUser?.email, setCartData);
  });

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     setFile(selectedFile);
  //   }
  // };

  // const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!file) return;

  //   try {
  //     setIsLoading(true);
  //     const cartItemId = localStorage.getItem("cartItemId");
  //     const user = await axios.get<User>(
  //       `/api/user/${auth.currentUser?.email}`
  //     );

  //     const storageRef = ref(storage, "payment");

  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //       },
  //       (error) => {
  //         switch (error.code) {
  //           case "storage/unauthorized":
  //             console.log("Permission error");
  //             break;
  //           case "storage/canceled":
  //             console.log("storage/canceled");
  //             break;

  //           case "storage/unknown":
  //             console.log("storage/unknown");
  //             break;
  //         }
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           const response = await fetch("/api/payment", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               userId: user.data.id,
  //               file: downloadURL,
  //             }),
  //           });

  //           const data = await response.json();
  //           if (data.success === true) {
  //             alert("Payment Uploaded successfully");
  //             deleteCartItem(cartItemId);
  //             router.push("/");
  //             setIsLoading(false);
  //             localStorage.removeItem("cartItemId");
  //           }
  //         });
  //       }
  //     );
  //   } catch (err) {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10 w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartData?.data.cartItems.map((items) => (
              <tr key={items.id} className="hover:bg-gray-100">
                <td className="px-6 py-4">
                  <img
                    src={items.product.imageUrl[1]}
                    alt="Product Image"
                    className="h-10 w-10 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {items.product.title}
                </td>
                <td className="px-6 py-4">€{items.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="w-full">
          <h1>Choose payment method</h1>
          <div className="md:w-[60%] w-full">
            {paymentMethods.map((item) => (
              <Accordion
                key={item.id}
                sx={{
                  boxShadow: "none",
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    borderRadius: 3,
                    ":hover": {
                      backgroundColor: "#dceff7",
                    },
                  }}
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    borderRadius: 5,
                    gap: "8px",
                    lineClamp: 2,
                    overflowX: "scroll",
                  }}
                >
                  {item.desc}
                  <CopyButton textToCopy={item.desc} />
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-4">
            <label className="text-[14px] text-gray-800 my-2">
              Upload payment reciept here
            </label>
            <input
              type="file"
              placeholder=""
              onChange={handleFileChange}
              className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
        
         
        </form> */}
        <div className="mt-8">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <button
              onClick={placeOrder}
              className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn"
            >
              Place order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentReviews;
