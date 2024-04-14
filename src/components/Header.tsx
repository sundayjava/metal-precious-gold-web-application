"use client";

import { Call, Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  metals,
  navData,
  goldData,
  silverData,
  platinumData,
  palladium,
} from "@/utils/headerData";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [metalData, setMetalData] = useState<any>({});
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let position = window.pageYOffset;
      if (position > 100 && headerRef.current) {
        headerRef.current.classList.add("fixed");
      } else if (headerRef.current) {
        headerRef.current.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await axios.get(
        "https://api.metals.dev/v1/latest?api_key=7293XOLNNXKQ3AJNA8K6155JNA8K6&currency=EUR&unit=toz",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setMetalData(response.data.metals);
    };

    fetchUrl();
  }, []);

  return (
    <>
      {/*For web*/}
      <div className="headerWrapper md:block hidden" ref={headerRef}>
        <header className="lg:px-[190px] md:px-[10px] px-1 bg-primaryColor/40 text-white">
          <div className="flex justify-between items-center text-white/70 text-[14px] py-[2px]">
            {metals.map((items) => (
              <p key={items.id} className="text-[12px]">
                <span className="cursor-pointer hover:text-white">
                  {items.value} €
                  {items.value === "GOLD"
                    ? metalData?.gold
                    : items.value === "SILVER"
                    ? metalData?.silver
                    : items.value === "PLATINUM"
                    ? metalData?.platinum
                    : metalData?.palladium}
                </span>
                <span
                  className={`text-[12px] ${
                    items.value === "PLATINUM"
                      ? "text-red-600"
                      : items.value === "PALLADIUM"
                      ? "text-red-600"
                      : "text-green-600"
                  } cursor-pointer hover:text-green-500 font-bold`}
                >
                  <ArrowDropUpIcon />
                  €0.00
                </span>
              </p>
            ))}
          </div>
        </header>
        <div className="lg:px-[190px] md:px-[10px] px-1 bg-secondaryColor py-2">
          <div className="flex justify-between">
            <div className="flex lg:gap-6 gap-2 items-center md:text-[14px] text-[12px] text-white/80">
              <select className="bg-transparent cursor-pointer">
                <option>€ EUR</option>
              </select>
              <select className="bg-transparent cursor-pointer">
                <option>🏳️‍⚧️ EN</option>
              </select>
              <p className="cursor-pointer hover-border">
                <Call sx={{ fontSize: 14 }} />
                +4122518911
              </p>
            </div>
            <div className="flex items-center text-white/80 md:text-[15px] text-[12px] md:gap-5 gap-2">
              <div className="flex md:gap-6 gap-2">
                {navData.map((item) => (
                  <Link key={item.id} href={item.url} className="hover-border">
                    {item.value}
                  </Link>
                ))}
              </div>
              <div className="md:h-3 h-2 w-[2px] bg-white" />
              <button className="text-white hover-border md:text-[16px] text-[12px]">
                Sign in
              </button>
              <button className="text-white border border-white hover:text-black md:text-[16px] text-[12px] hover:bg-white rounded-md md:px-3 px-1 md:py-1 py-[2px]">
                Open an account
              </button>
            </div>
          </div>
        </div>
        <div className="lg:px-[190px] md:px-[10px] px-1 bg-secondaryColor py-2 flex justify-between">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-4 text-white/80 hover:text-white">
              <Image
                src={logo}
                alt="log"
                className="md:w-[25px] w-[20px] md:h-[25px] h-[20px]"
              />
              <p className="uppercase cursor-pointer">waret gold</p>
            </div>
            <div
              className={`nav flex items-center ${
                isOpenNav === true && "click"
              }`}
            >
              <div className="">
                <div className="flex">
                  <nav className={isOpenNav === true ? "open" : ""}>
                    <ul className="list-none flex mb-0 md:gap-3 gap-1 items-center">
                      <li>
                        <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
                          <Link
                            href={"/"}
                            className="text-white hover:bg-white/20 rounded-lg md:px-3 px-1 md:text-[16px] text-[12px] py-[2px]"
                          >
                            GOLD{" "}
                          </Link>
                        </Button>
                        <div
                          className={`dropdown_menu megaMenu ${
                            openMegaMenu === true && "open"
                          }`}
                        >
                          <div className="flex">
                            {goldData.length !== 0 &&
                              goldData.map((item) => (
                                <div key={item.id} className="">
                                  <h4 className="text-[15px] text-primaryColor cursor-pointer mb-2 hover-border font-bold mr-5 block">
                                    {item.value}
                                  </h4>
                                  {item.items?.length !== 0 && (
                                    <ul className="w-full">
                                      {item.items?.map((itemize) => (
                                        <li
                                          key={itemize.id}
                                          className="text-[13px] font-light w-full cursor-pointer hover-border"
                                        >
                                          {itemize.value}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
                          <Link
                            href={"/"}
                            className="text-white hover:bg-white/20 rounded-lg md:px-3 px-1 md:text-[16px] text-[12px] py-[2px]"
                          >
                            SILVER{" "}
                          </Link>
                        </Button>
                        <div
                          className={`dropdown_menu megaMenu ${
                            openMegaMenu === true && "open"
                          }`}
                        >
                          <div className="flex">
                            {silverData.length !== 0 &&
                              silverData.map((item) => (
                                <div key={item.id} className="">
                                  <h4 className="text-primaryColor text-[15px] cursor-pointer mb-2 hover-border font-bold mr-5 block">
                                    {item.value}
                                  </h4>
                                  {item.items?.length !== 0 && (
                                    <ul className="w-full">
                                      {item.items?.map((itemize) => (
                                        <li
                                          key={itemize.id}
                                          className="text-[13px] font-light w-full cursor-pointer hover-border"
                                        >
                                          {itemize.value}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
                          <Link
                            href={"/"}
                            className="text-white hover:bg-white/20 rounded-lg md:px-3 px-1 md:text-[16px] text-[12px] py-[2px]"
                          >
                            PLATINUM{" "}
                          </Link>
                        </Button>
                        <div
                          className={`dropdown_menu megaMenu ${
                            openMegaMenu === true && "open"
                          }`}
                        >
                          <div className="flex flex-wrap">
                            {platinumData.length !== 0 &&
                              platinumData.map((item) => (
                                <div key={item.id} className="">
                                  <h4 className="text-primaryColor text-[15px] cursor-pointer my-2 hover-border font-bold mr-5 block">
                                    {item.value}
                                  </h4>
                                  {item.items?.length !== 0 && (
                                    <ul className="w-full">
                                      {item.items?.map((itemize) => (
                                        <li
                                          key={itemize.id}
                                          className="text-[13px] font-light w-full cursor-pointer hover-border"
                                        >
                                          {itemize.value}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      </li>
                      <li className="inline-block">
                        <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
                          <Link
                            href={"/"}
                            className="text-white hover:bg-white/20 rounded-lg md:px-3 px-1 md:text-[16px] text-[12px] py-[2px]"
                          >
                            PALLADIUM{" "}
                          </Link>
                        </Button>
                        <div
                          className={`dropdown_menu megaMenu ${
                            openMegaMenu === true && "open"
                          }`}
                        >
                          <div className="flex">
                            {palladium.length !== 0 &&
                              palladium.map((item) => (
                                <div key={item.id} className="">
                                  <h4 className="text-primaryColor text-[15px] cursor-pointer mb-2 hover-border font-bold mr-5 block">
                                    {item.value}
                                  </h4>
                                  {item.items?.length !== 0 && (
                                    <ul className="w-full">
                                      {item.items?.map((itemize) => (
                                        <li
                                          key={itemize.id}
                                          className="text-[13px] font-light w-full cursor-pointer hover-border"
                                        >
                                          {itemize.value}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      </li>
                      <li className=" mr-3">
                        <Search sx={{ color: "white", cursor: "pointer" }} />
                      </li>
                      <li>
                        <ShoppingCartOutlinedIcon
                          sx={{ color: "white", cursor: "pointer" }}
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*For mobile*/}
      <div className="md:hidden block bg-secondaryColor text-white/80 fixed z-30 top-0 w-full">
        <div className="grid grid-cols-5 px-3 py-3">
          <div className="col-span-1">
            <MenuIcon sx={{ color: "white", cursor: "pointer",fontSize:30, fontWeight:200 }}/>
          </div>
          <div className="flex col-span-3 justify-center items-center gap-4 text-white/80 hover:text-white">
            <Image
              src={logo}
              alt="log"
              className="w-[25px] h-[25px]"
            />
            <p className="uppercase cursor-pointer text-[20px]">
              <span className="font-bold">waret</span> gold
            </p>
          </div>
          <div className="col-span-1 justify-end flex">
            <ShoppingCartOutlinedIcon
              sx={{ color: "white", cursor: "pointer",fontSize:30, fontWeight:200 }}
            />
          </div>
        </div>
        <ul className="list-none flex mb-3 justify-center items-center">
          <li>
            <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
              <Link
                href={"/"}
                className="text-white hover:bg-white/20 rounded-lg py-[2px] px-2"
              >
                GOLD{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
              <Link
                href={"/"}
                className="text-white hover:bg-white/20 rounded-lg py-[2px] px-2"
              >
                SILVER{" "}
              </Link>
            </Button>
          </li>
          <li>
            <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
              <Link
                href={"/"}
                className="text-white hover:bg-white/20 rounded-lg py-[2px] px-2"
              >
                PLATINUM{" "}
              </Link>
            </Button>
          </li>
          <li className="inline-block">
            <Button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
              <Link
                href={"/"}
                className="text-white hover:bg-white/20 rounded-lg py-[2px] px-2"
              >
                PALLADIUM{" "}
              </Link>
            </Button>
          </li>
          <li className=" mr-3">
            <Search sx={{ color: "white", cursor: "pointer" }} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
