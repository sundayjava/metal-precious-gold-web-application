"use client";

import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import { ArrowDropUp, Call, Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { metals, navData } from "@/app/_utility/headerData";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { useRouter } from "next/navigation";
import { category } from "@/app/_utility/category";
import { auth } from "@/config/firebase";
import axios from "axios";
import { signOut } from "@firebase/auth";
import { CartData, getCartItem } from "@/app/_utility/apicall";
import { User } from "@/app/_utility/user";

const CustomHeader = (props: { isSidebarOpen: any; setIsSidebarOpen: any }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [lang, setLang] = useState("en");
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = useState<User | null>(null);
  const [cartData, setCartData] = useState<CartData | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToOrder = () => {
    handleClose();
    router.push("/en/order-history");
  };

  const hanldeLogout = () => {
    signOut(auth)
      .then(() => {
        alert("User Logout");
        handleClose();
        setUser(null);
      })
      .catch((error) => {
        alert("Unable to logout");
      });
  };

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
    getCartItem(auth.currentUser?.email, setCartData);
  }, [auth.currentUser?.email]);

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "#000000",
          flexDirection: "column",
          justifyContent: "space-between",
          py: "0.1rem",
          px: "1.5rem",
          color: "#000080",
        }}
      >
        <div className="headerWrapper md:block hidden" ref={headerRef}>
          <header className="lg:px-[190px] md:px-[10px] px-1 bg-black">
            <div className="flex justify-between items-center  text-accent text-[14px] py-[2px]">
              {metals.map((items) => (
                <p key={items.id} className="text-[12px]">
                  <span className="cursor-pointer hover:text-white">
                    {items.value} €
                    {items.value === "GOLD"
                      ? (23221.7).toLocaleString()
                      : items.value === "SILVER"
                      ? (1781.23).toLocaleString()
                      : items.value === "PLATINUM"
                      ? (821.0).toLocaleString()
                      : (361.0).toLocaleString()}
                  </span>
                  <span
                    className={`text-[12px] ${
                      items.value === "PLATINUM"
                        ? "text-green-600"
                        : items.value === "PALLADIUM"
                        ? "text-green-600"
                        : "text-green-600"
                    } cursor-pointer hover:text-green-500 font-bold`}
                  >
                    <ArrowDropUp />
                    €0.00
                  </span>
                </p>
              ))}
            </div>
          </header>
          <div className="lg:px-[190px] md:px-[10px] px-1 bg-secondaryColor text-accent font-normal py-2">
            <div className="flex justify-between">
              <div className="flex lg:gap-6 gap-2 items-center md:text-[14px] text-[12px] text-accent">
                <p className="text-[14px]">
                  <span className="rounded-full px-1 bg-primaryColor text-white">
                    €
                  </span>{" "}
                  EUR
                </p>

                <select
                  onChange={changeLanguage}
                  className="bg-transparent cursor-pointer text-[14px]"
                >
                  <option value="en">EN</option>
                </select>
                <p className="cursor-pointer hover-border text-[14px]">
                  <Call sx={{ fontSize: 14 }} />
                  +41225189111
                </p>
              </div>
              <div className="flex items-center text-[rgb(255, 255, 255)] leading-[1.2] font-normal text-[15px] md:gap-5 gap-2">
                <div className="flex md:gap-6 gap-2">
                  {navData.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className="hover-border"
                    >
                      {item.value}
                    </Link>
                  ))}
                </div>
                <div className="md:h-3 h-2 w-[2px] bg-accent" />
                {user !== null ? (
                  <div className="md:block hidden">
                    <button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="text-[14px]"
                    >
                      {user.firstname} {user.lastname}
                    </button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={navigateToOrder}>
                        Order history
                      </MenuItem>
                      <MenuItem onClick={hanldeLogout}>Sign out</MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <div className="flex gap-5">
                    <button
                      onClick={() =>
                        router.push(`/${localStorage.getItem("lang")}/login`)
                      }
                      className="text-accent hover-border text-[14px]"
                    >
                      Sign in
                    </button>
                    <button
                      onClick={() =>
                        router.push(`/${localStorage.getItem("lang")}/sign-up`)
                      }
                      className="text-accent border border-accent text-[14px] hover:bg-primaryColor/30 rounded-md md:px-3 px-1 md:py-1 py-[2px]"
                    >
                      Open an account
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:px-[190px] md:px-[10px] px-1 bg-secondaryColor py-5 flex justify-between">
            <div className="flex justify-between w-full">
              <div
                className="flex items-center gap-4 text-accent"
                onClick={() => router.push("/")}
              >
                <Image
                  src={logo}
                  alt="log"
                  className="md:w-[25px] w-[20px] md:h-[25px] h-[18px]"
                />
                <p className="uppercase cursor-pointer flex gap-2 hover-border font-bold">
                  waret <span className="font-normal">gold</span>
                </p>
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
                        {category.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() =>
                                router.push(`/${lang}/buy/${item.parent}`)
                              }
                              className="text-accent hover:bg-primaryColor/30 text-[16px] leading-[22px] font-bold rounded-lg py-[2px] px-2 uppercase"
                            >
                              {item.parent}
                            </button>

                            <div
                              className={`dropdown_menu megaMenu ${
                                openMegaMenu === true && "open"
                              }`}
                            >
                              <div className="flex flex-wrap">
                                {item.children.length !== 0 &&
                                  item.children.map((item) => (
                                    <div key={item.id} className="">
                                      <h4
                                        onClick={() =>
                                          router.push(
                                            `/${lang}/buy/${item.value}`
                                          )
                                        }
                                        className="text-[15px] text-accent cursor-pointer mb-2 hover-border font-bold mr-5 block"
                                      >
                                        {item.value}
                                      </h4>
                                      {item.items?.length !== 0 && (
                                        <ul className="w-full text-black">
                                          {item.items?.map((itemize) => (
                                            <li
                                              key={itemize.id}
                                              onClick={() =>
                                                router.push(
                                                  `/${lang}/buy/${item.value}`
                                                )
                                              }
                                              className="text-[13px] text-black font-light w-full cursor-pointer hover-border"
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
                        ))}
                        <li
                          onClick={() => router.push(`/${lang}/cart`)}
                          className="relative ml-3"
                        >
                          <ShoppingCartOutlinedIcon
                            sx={{ color: "#C1C2C5", cursor: "pointer" }}
                          />
                          <div className="absolute cursor-pointer bg-red-600 px-1 right-1 text-[12px] font-bold text-primaryColor rounded-full top-0">
                            {cartData?.data?.cartItems.length}
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between items-center flex gap-[3rem] w-full pt-2">
          <IconButton
            onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <div
            className="flex col-span-3 justify-center items-center gap-4 text-accent"
            onClick={() => router.push("/")}
          >
            <Image src={logo} alt="log" className="w-[20px] h-[20px]" />
            <p className="uppercase cursor-pointer">
              <span className="font-bold">waret</span> gold
            </p>
          </div>
          <div
            className="col-span-1 justify-end flex relative"
            onClick={() => router.push(`/${lang}/cart`)}
          >
            <ShoppingCartOutlinedIcon
              sx={{
                color: "#C1C2C5",
                cursor: "pointer",
                fontSize: 25,
                fontWeight: 200,
              }}
            />
            <div className="absolute bg-primaryColor px-1 right-1 text-[12px] font-bold text-accent rounded-full top-0">
              {cartData?.data?.cartItems.length}
            </div>
          </div>
        </div>
        <ul className="list-none gap-3 flex mb-3 mt-2 justify-center items-center">
          {category.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => router.push(`/${lang}/buy/${item.parent}`)}
                className="text-primaryColor hover:bg-white/20 text-[14px] rounded-lg py-[2px] px-2 uppercase"
              >
                {item.parent}
              </button>
            </li>
          ))}
          {/* 
          <li className=" mr-3">
            <Search sx={{ color: "white", cursor: "pointer", fontSize: 22 }} />
          </li> */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;
