import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { ChangeEvent, useEffect, useState } from "react";
import CopyButton from "../globalcomponent/CopyBtn";
import { auth, storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { User } from "@/app/_utility/user";
import { CartData, getCartItem } from "@/app/_utility/apicall";

const PaymentOptions = (props: { nextStep: any }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [cartData, setCartData] = useState<CartData | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  async function getProfile() {
    if (auth.currentUser?.email) {
      try {
        const response = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("lang", "en");
    getProfile();
  }, [auth.currentUser?.email]);

  useEffect(() => {
    getCartItem(auth.currentUser?.email, setCartData);
  });

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.nextStep();
    // if (!file) {return};

    // try {
    //   setIsLoading(true);
    //   const user = await axios.get<User>(
    //     `/api/user/${auth.currentUser?.email}`
    //   );

    //   const storageRef = ref(storage, "payment");

    //   const uploadTask = uploadBytesResumable(storageRef, file);

    //   uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //       const progress =
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log("Upload is " + progress + "% done");
    //     },
    //     (error) => {
    //       switch (error.code) {
    //         case "storage/unauthorized":
    //           console.log("Permission error");
    //           break;
    //         case "storage/canceled":
    //           console.log("storage/canceled");
    //           break;

    //         case "storage/unknown":
    //           console.log("storage/unknown");
    //           break;
    //       }
    //     },
    //     () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //         const response = await fetch("/api/payment", {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({
    //             userId: user.data.id,
    //             file: downloadURL,
    //           }),
    //         });

    //         const data = await response.json();
    //         if (data.success === true) {
    //           alert("Payment Uploaded successfully");
    //           props.nextStep()
    //           setIsLoading(false);
    //           localStorage.removeItem("cartItemId");
    //         }
    //       });
    //     }
    //   );
    // } catch (err) {
    //   setIsLoading(false);
    // }
  };

  const walletpayment = async () => {
    if (selectedValue) {
      if (user && cartData && user.balance < cartData.data.totalPrice) {
        alert("Your balance is low");
        return;
      } else {
        try {
          const response = await fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user?.id,
              desc: `${user?.firstname} ${user?.lastname} Make payment of ${cartData?.data.totalPrice}`,
            }),
          });

          const data = await response.json();
          if (data.success === true) {
            const totalPrice = cartData?.data.totalPrice ?? 0;
            const balance = user?.balance ?? 0;
            const lastbal = balance - totalPrice;

            await fetch(`/api/user/${auth.currentUser?.email}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                balance: lastbal,
              }),
            });

            alert("Payment Uploaded successfully");
            props.nextStep();
            setIsLoading(false);
            localStorage.removeItem("cartItemId");
          }
        } catch (error) {}
      }
    }
  };

  const paymentMethods = [
    {
      id: 1,
      title: "Bitcoin",
      desc: "hbjwe882u012bjbd980u09eu02ejbsfs8u108ue082jve-eff",
    },
    {
      id: 2,
      title: "Bank Transfer",
      desc: "9079029135",
    },
    {
      id: 3,
      title: "Wallet",
      desc: "",
    },
  ];

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10 w-full">
        <div className="w-full">
          <h1>Choose payment method</h1>
          <div className="md:w-[60%] w-full">
            {paymentMethods.map((item) => {
              if (item.title === "Wallet") {
                return (
                  <div className="flex gap-3 items-center mt-6">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label={item.title}
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Others"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                );
              } else {
                return (
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
                    {
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
                    }
                  </Accordion>
                );
              }
            })}
          </div>
        </div>
        {selectedValue === "1" ? (
          <div className="mt-8">
            {isLoading ? (
              <CircularProgress />
            ) : (
              <button
                onClick={walletpayment}
                className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn"
              >
                Next
              </button>
            )}
          </div>
        ) : (
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

            <div className="mt-8">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <button className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn">
                  Next
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentOptions;
