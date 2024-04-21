"use client"

import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="custom-box-shadow rounded-md md:px-16 px-4 md:w-[35%] w-[98%] py-10">
        <h1 className="text-[20px] font-bold text-center">Welcome back!</h1>
        <p className="mb-8 text-[14px] font-light text-center">
          Please sign in to access your personal account
        </p>
        <form action="">
          <div className="flex flex-col">
            <TextField
              sx={{ width: "100%" }}
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
            <p className="text-blue-700 text-[12px] hover-border cursor-pointer">
              Forgot password
            </p>
          </div>
          <button className="text-[14px] my-8 font-bold text-white py-3 w-full bg-primaryColor rounded-md">
            Sign in
          </button>
        </form>
        <p className="mb-3 text-[14px] font-light text-center">
          First time on WARET GOLD?
        </p>
        <button onClick={()=>router.push(`/${localStorage.getItem("lang")}/sign-up`)} className="text-[14px] font-bold py-3 rounded-md w-full text-primaryColor border border-primaryColor">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
