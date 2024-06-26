"use client";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { sendMail } from "@/config/mail";

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    firstname: "", 
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (info.password.length <= 6) {
      return alert("Password is too short");
    }

    try {
      setLoading(true);

      const res = await createUserWithEmailAndPassword(
        auth,
        info.email,
        info.password
      );

      if (res.user) {
        const response = await fetch("/api/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: info.firstname,
            lastname: info.lastname,
            email: info.email,
          }),
        });

        const data = await response.json();

        if (data.success !== true) {
          console.log(response);
          alert(data.error);
          setLoading(false);
          return;
        }

        console.log(data);
        if (data.success == true) {
          const result = await sendMail({
            to: info.email,
            firstname: info.firstname,
            lastname: info.lastname,
          });
          if(result?.accepted){
            alert("We`ve sent a mail to your e-mail")
          }
          setLoading(false);
          router.push(`/${localStorage.getItem("lang")}/login`);
        }
      } else {
        console.error("User not signed in", res);
      }
    } catch (error) {
      alert("Network error");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center md:min-h-[100vh]">
      <div className="rounded-md md:px-16 px-4 xl:w-[35%] lg:w-[45%] md:w-[55%] w-[98%] py-10">
        <h1 className="text-[28px] font-[700] leading-[36px] text-darkaccent hover:text-accent">Welcome to GOLD AVENUE!</h1>
        <h1 className="mt-4 text-[18px] leading-[20px] font-[400] mb-8 hover:text-accent text-darkaccent">Savings made simple.</h1>
        <p className="my-5 text-[14px] font-light">
          Fill in the fields below to open your{" "}
          <span className="text-blue-400 hover-border cursor-pointer">
            personal account.
          </span>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex items-center md:flex-row flex-col gap-3 w-full">
            <div className="flex flex-col w-full">
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="firstname"
                value={info.firstname}
                onChange={handleChange}
                label={
                  <p>
                    First name(s) <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
                required
              />
              <span className="text-red-500 italic text-[12px]"></span>
            </div>
            <div className="flex flex-col w-full">
              <TextField
                sx={{ width: "100%", mt: 3 }}
                type="text"
                id="outlined-basic"
                name="lastname"
                value={info.lastname}
                onChange={handleChange}
                label={
                  <p>
                    Last name <span className="text-red-500">*</span>
                  </p>
                }
                variant="outlined"
                required
              />
              <span className="text-red-500 italic text-[12px]"></span>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <TextField
              sx={{ width: "100%" }}
              type="email"
              id="outlined-basic"
              name="email"
              value={info.email}
              onChange={handleChange}
              label={
                <p>
                  Email <span className="text-red-500">*</span>
                </p>
              }
              variant="outlined"
              required
            />
            <span className="text-red-500 italic text-[12px]"></span>
          </div>
          <div className="flex flex-col">
            <TextField
              sx={{ width: "100%", mt: 3 }}
              type="password"
              id="outlined-basic"
              name="password"
              value={info.password}
              onChange={handleChange}
              label={
                <p>
                  Password <span className="text-red-500">*</span>
                </p>
              }
              variant="outlined"
              required
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
                control={<Checkbox />}
                sx={{ mt: 2 }}
                label={
                  <p className="text-[14px] font-normal">
                    I want to receive the WARET GOLD news and market insights.
                  </p>
                }
              />
            </FormGroup>
          </div>
          {loading ? (
            <CircularProgress />
          ) : (
            <button className="text-[14px] my-8 font-bold text-white py-3 px-4 grdientBtn rounded-md">
              Open an account
            </button>
          )}
        </form>
        <p className="mt-4 text-[18px] leading-[20px] font-[400] mb-8 hover:text-accent text-darkaccent">
          Already have an account?{" "}
          <span
            className="text-blue-400 hover-border cursor-pointer"
            onClick={() =>
              router.push(`/${localStorage.getItem("lang")}/login`)
            }
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
