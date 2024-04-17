"use client";

import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import SendIcon from "@mui/icons-material/Send";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import logo from '../../../../public/logo.png';
import Link from "next/link";
import delivery from '../../../../public/delivery.jpg'

const footerItem = [
  {
    id: 1,
    label: "SHOP",
    values: [
      {
        id: 1,
        label: "Gold",
        url: "",
      },
      {
        id: 2,
        label: "Silver",
        url: "",
      },
      {
        id: 3,
        label: "Platinum",
        url: "",
      },
      {
        id: 4,
        label: "Palladium",
        url: "",
      },
    ],
  },
  {
    id: 2,
    label: "BUYING & SELLING",
    values: [
      {
        id: 1,
        label: "Live charts",
        url: "",
      },
      {
        id: 4,
        label: "Storage solution",
        url: "",
      },
      {
        id: 5,
        label: "Pricing",
        url: "",
      },
    ],
  },
  {
    id: 3,
    label: "KNOWLEDGE",
    values: [
      {
        id: 1,
        label: "Precious metal guide",
        url: "",
      },
      {
        id: 2,
        label: "Faq",
        url: "",
      },
      {
        id: 3,
        label: "Tutorial Video",
        url: "",
      }
    ],
  },
  {
    id: 4,
    label: "WHO ARE WE",
    values: [
      {
        id: 1,
        label: "About us",
        url: "",
      },
      {
        id: 3,
        label: "Contact us",
        url: "",
      },
      {
        id: 4,
        label: "Refer your friends",
        url: "",
      },
    ],
  },
  {
    id: 5,
    label: "MY ACCOUNT",
    values: [
      {
        id: 1,
        label: "Wallet",
        url: "",
      },
      {
        id: 2,
        label: "History",
        url: "",
      },
      {
        id: 3,
        label: "Storage fees",
        url: "",
      },
      {
        id: 4,
        label: "Purchase limit",
        url: "",
      },
      {
        id: 5,
        label: "Profile settings",
        url: "",
      },
    ],
  },
];

const socials = [
  {
    id: 1,
    icon: <YouTubeIcon sx={{fontSize:17, cursor:'pointer'}}/>,
    url: "",
  },
  {
    id: 2,
    icon: <FacebookIcon sx={{fontSize:17, cursor:'pointer'}}/>,
    url: "",
  },
  {
    id: 3,
    icon: <InstagramIcon sx={{fontSize:17, cursor:'pointer'}}/>,
    url: "",
  },
  {
    id: 4,
    icon: <LinkedInIcon sx={{fontSize:17, cursor:'pointer'}}/>,
    url: "",
  },
  {
    id: 5,
    icon: <XIcon sx={{fontSize:17, cursor:'pointer'}}/>,
    url: "",
  },
];

const topOfPage = () => {
  const delay = 10;
  const scrollStep = -20;

  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, delay);
};

const Footer = () => {
  const date = new Date();

  return (
    <>
      <div className="mt-16">
        <div className="lg:px-[190px] md:px-[10px] px-2 flex justify-center border-t py-2">
          <div
            onClick={topOfPage}
            className="flex flex-col items-center cursor-pointer"
          >
            <KeyboardControlKeyIcon sx={{ fontSize: 16 }} />
            <p className="uppercase text-[10px]">Top of page</p>
          </div>
        </div>
        <div className="lg:px-[190px] md:px-[10px] px-2 flex md:flex-row flex-col  justify-center items-center gap-8 bg-primaryColor text-white/80 py-3">
          <h1 className="md:text-[14px] text-[10px] font-bold md:text-start text-center">
            SUBSCRIBE to WARET GOLD newsletter to stay informed of our special
            offers
          </h1>
          <form className="flex items-center bg-white/30 rounded-md px-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[14px] text-white border-none outline-none bg-transparent"
            />
            <div>
              <SendIcon
                sx={{
                  transform: "rotate(-35deg)",
                  marginBottom: 1,
                  fontSize: 20,
                  cursor: "pointer",
                }}
              />
            </div>
          </form>
        </div>
        <div className="lg:px-[190px] md:px-[10px] px-2 bg-secondaryColor text-white/80 py-5">
          <div className="flex gap-2 items-center mb-8">
            <Image src={logo} alt="log" className="w-[30px] h-[30px]" />
            <div>
              <p className="uppercase cursor-pointer font-bold text-[15px]">
                waret gold
              </p>
              <p className="text-[12px] font-light">
                Official MKS PAMP GROUP online retailer
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 justify-center mb-5">
            {footerItem.map((items) => (
              <div className="" key={items.id}>
                <h1 className="mb-4 font-bold">{items.label}</h1>
                {items.values.map((item) => (
                  <p
                    className="text-[14px] cursor-pointer mb-3"
                    key={item.id}
                  >
                    <Link href={item.url} className="hover-border">{item.label}</Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
          <hr />
          <div className="flex md:flex-row flex-col justify-between mt-8 mb-3">
            <div className="md:mb-0 mb-3">
              <select className="bg-transparent cursor-pointer">
                <option>€ EUR</option>
              </select>
              <select className="bg-transparent cursor-pointer">
                <option>🏳️‍⚧️ EN</option>
              </select>
            </div>
            <div className="flex gap-10 md:flex-row flex-col">
              <h3 className="text-[14px] flex gap-2 items-center font-bold">
                Payment Methods:{" "}
                <span className="bg-white/20 cursor-pointer rounded-md px-3 flex items-center text-[12px] gap-1 font-normal py-1 hover:bg-transparent">
                  <AccountBalanceIcon sx={{ fontSize: 18 }} /> BANK TRANSFER
                </span>{" "}
                <span className="bg-white/20 cursor-pointer rounded-md px-3 flex items-center text-[12px] gap-1 font-normal py-1 hover:bg-transparent">
                  <CurrencyBitcoinIcon sx={{ fontSize: 18 }} /> BITCOIN
                </span>
              </h3>
              <h3 className="text-[14px] flex gap-1 items-center font-bold">
              <PublicIcon sx={{ fontSize: 18 }} /> Delivery:{" "}
                <span className="px-3 flex items-center text-[12px] gap-1 font-normal py-1 hover:bg-transparent">
                  <Image src={delivery} alt="delivery" className=""/>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:px-[190px] md:px-[10px] px-2 bg-primaryColor text-white/80 py-4 text-[13px] flex md:flex-row flex-col justify-center gap-5 items-center">
          <div className="flex gap-5 items-center">
            {socials.map((item) => (
              <div key={item.id}>{item.icon}</div>
            ))}
          </div>
         <div className="flex items-center gap-2">
         <div className="w-[2px] h-3 bg-white md:block hidden" />
          <h1 className=" cursor-pointer hover:underline">General Conditions</h1>
          <div className="w-[2px] h-3 bg-white" />
          <h1 className=" cursor-pointer hover:underline">Privacy policy</h1>
          <div className="w-[2px] h-3 bg-white" />
          <h1 className=" cursor-pointer hover:underline">Impression</h1>
          <div className="w-[2px] h-3 bg-white md:block hidden" />
         </div>
          <h1>
            &copy; 2018-{date.getFullYear()} WARETGOLD.COM, All Rights Reserved
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
