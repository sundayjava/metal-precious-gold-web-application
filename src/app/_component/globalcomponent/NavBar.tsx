"use client";

import Image from "next/image";
import logo from "../../../../public/logo.png";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center w-full lg:px-[240px] bg-secondaryColor py-7 fixed top-0 z-20 text-white md:px-[10px] px-3">
        <div
          className="flex items-center gap-4 text-white/80 hover:text-white"
          onClick={() => router.push("/")}
        >
          <Image
            src={logo}
            alt="log"
            className="md:w-[25px] w-[20px] md:h-[25px] h-[20px]"
          />
          <p className="uppercase cursor-pointer">waret gold</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
