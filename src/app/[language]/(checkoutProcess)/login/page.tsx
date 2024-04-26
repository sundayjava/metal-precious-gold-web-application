"use client";

import { auth } from "@/config/firebase";
import { CircularProgress, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, info.email, info.password);
      router.push("/");
      setLoading(false);
    } catch (err) {
      alert("Something went wrong. please try again");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="custom-box-shadow rounded-md md:px-16 px-4 md:w-[35%] w-[98%] py-10">
        <h1 className="text-[28px] font-[700] leading-[36px] text-darkaccent hover:text-accent">Welcome back!</h1>
        <p className="mt-4 text-[18px] leading-[20px] font-[400] mb-8 hover:text-accent text-darkaccent">
          Please sign in to access your personal account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
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
              id="outlined-basic"
              type="password"
              name="password"
              value={info.password}
              onChange={handleChange}
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
            <p className="text-blue-700 text-[12px] hover-border cursor-pointer">
              Forgot password
            </p>
          </div>
          {loading ? (
            <CircularProgress />
          ) : (
            <button className="text-[14px] my-8 font-bold text-white py-3 w-full grdientBtn rounded-md">
              Sign in
            </button>
          )}
        </form>
        <p className="mb-4 text-[18px] leading-[20px] font-[400] hover:text-accent text-darkaccent">
          First time on WARET GOLD?
        </p>
        <button
          onClick={() =>
            router.push(`/${localStorage.getItem("lang")}/sign-up`)
          }
          className="text-[14px] font-bold py-3 rounded-md w-full text-primaryColor border border-primaryColor"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
