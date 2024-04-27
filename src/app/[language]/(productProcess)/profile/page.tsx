"use client";

import { auth } from "@/config/firebase";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { User } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  async function getProfile() {
    if (auth.currentUser?.email) {
      try {
        const response = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("lang", "en");
    getProfile();
    // getCartItem(auth.currentUser?.email, setCartData);
  }, [auth.currentUser?.email]);

  return (
    <div className="pt-16">
      <div>
        <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
          Profile Settings
        </h1>
        <p className="text-decoration-none text-darkaccent leading-[32px] my-3 text-[16px] font-[400] max-w-[750px]">
          Manage your profile address, security, and password
        </p>
        <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[14px] font-[700] mb-[24px]">
          Personal information
        </h1>
        <div className="py-14 px-10 shadow-lg bg-white rounded-md">
          <div className="md:w-[50%] w-full">
            <div className="flex gap-3 items-center mt-6">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="MR"
                  name="radio-buttons-group"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="MR"
                    // onChange={(e) =>
                    //   handleRadioFilterChange(section.id, e)
                    // }
                  />
                  <div className="my-4" />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="MRS"
                    // onChange={(e) =>
                    //   handleRadioFilterChange(section.id, e)
                    // }
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex gap-3 items-center">
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="firstname"
                value={user?.firstname}
                label={
                  <p>
                    First name(s) <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="firstname"
                value={user?.lastname}
                label={
                  <p>
                    Last name(s) <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
            </div>
            <p className="text-decoration-none text-darkaccent leading-[32px] mt-3 text-[16px] font-[400] max-w-[750px]">
              Date of birth (i.e: 31/01/1975):
            </p>
            <div className="flex md:flex-row flex-col gap-3 items-center">
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="firstname"
                label={
                  <p>
                    Day <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="firstname"
                label={
                  <p>
                    Month <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="firstname"
                label={
                  <p>
                    Year <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
              />
            </div>
            <TextField
              sx={{ width: "100%", mt: 3 }}
              type="text"
              id="outlined-basic"
              name="phonenumber"
              value={user?.phoneNumber}
              label={
                <p>
                  Phone Number <span className="text-red-500">*</span>
                </p>
              }
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", mt: 3 }}
              type="text"
              id="outlined-basic"
              name="email"
              value={user?.email}
              label={
                <p>
                  Email <span className="text-red-500">*</span>
                </p>
              }
              variant="outlined"
            />
          </div>
          <p className="text-decoration-none text-darkaccent leading-[32px] mt-8 text-[16px] font-[400] max-w-[750px]">
            <span className="font-[700]">NOTE:</span> Please contact our
            customer service if you`d like to update your first name, last name,
            and phone number.
          </p>
          <button
            onClick={() => alert("Successfull")}
            className="text-white text-[13px] my-2 mt-10 font-bold grdientBtn px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
