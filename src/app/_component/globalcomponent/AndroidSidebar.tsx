"use client";

import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { ChevronLeft, Groups2Outlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  goldData,
  palladium,
  platinumData,
  silverData,
} from "@/app/_utility/headerData";
import Link from "next/link";
import { auth } from "@/config/firebase";
import { User } from "@prisma/client";
import axios from "axios";
import { signOut } from "firebase/auth";
import { ChangeEvent, useEffect, useState } from "react";
import { category } from "@/app/_utility/category";

const AndroidSidebar = (props: {
  isNonMobile: any;
  drawerWidth: any;
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}) => {
  const router = useRouter();
  const { drawerWidth, isNonMobile, isSidebarOpen, setIsSidebarOpen } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [user, setUser] = useState<User | null>(null);
  const [lang, setLang] = useState("en");

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToOrder = () => {
    handleClose();
  };

  const navigateToProfile = () => {
    handleClose();
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
  }, [auth.currentUser?.email]);

  const sideData = [
    {
      id: 1,
      label: "Storage solution",
    },
    {
      id: 2,
      label: "Pricing",
    },
    {
      id: 4,
      label: "About us",
    },
    {
      id: 5,
      label: "Contact us",
    },
  ];

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          elevation={20}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "1px",
              width: drawerWidth,
            },
          }}
        >
          <div className="w-full">
            <div className="flex w-full bg-black px-2 text-white gap-4 justify-between py-3 items-center">
              {user !== null ? (
                <div className=" py-4 px-2">
                  <button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="text-[14px] font-bold"
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
                    <MenuItem onClick={navigateToProfile}>History</MenuItem>
                    <MenuItem onClick={navigateToOrder}>
                      Profile Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Storage</MenuItem>
                    <MenuItem onClick={hanldeLogout}>Sign out</MenuItem>
                  </Menu>
                </div>
              ) : (
                <div className="flex justify-between items-center gap-3">
                  <button
                    onClick={() =>
                      router.push(`/${localStorage.getItem("lang")}/sign-up`)
                    }
                    className="text-[12px] font-bold"
                  >
                    Open an account
                  </button>
                  <div className="w-[2px] h-3 bg-white" />
                  <button
                    onClick={() =>
                      router.push(`/${localStorage.getItem("lang")}/login`)
                    }
                    className="text-[12px] font-bold"
                  >
                    Sign in
                  </button>
                </div>
              )}

              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <ChevronLeft sx={{ color: "white" }} />
              </IconButton>
            </div>

            <div className="">
              <h1 className="font-bold ml-2 my-2">Shops</h1>
              <div>
                {category.map((item) => (
                  <Accordion key={item.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{ color: "black" }}
                    >
                      <p
                        className="uppercase text-[14px] font-normal"
                        onClick={() => {
                          router.push(`/${lang}/buy/${item.parent}`);
                          setIsSidebarOpen(!isSidebarOpen);
                        }}
                      >
                        {item.parent}
                      </p>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                    >
                      {item.children.map((item) => (
                        <div key={item.id}>
                          <button
                            className="text-blue-700 text-[14px] font-bold"
                            onClick={() => {
                              router.push(`/${lang}/buy/${item.value}`);
                              setIsSidebarOpen(!isSidebarOpen);
                            }}
                          >
                            {item.value}
                          </button>
                          <div className="flex flex-wrap gap-2 items-center">
                            {item.items?.map((item) => (
                              <span
                                key={item.id}
                                onClick={() => {
                                  router.push(`/${lang}/buy/${item.value}`);
                                  setIsSidebarOpen(!isSidebarOpen);
                                }}
                                className="hover-border text-[12px] font-light"
                              >
                                {item.value}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>

            <div className="flex flex-col px-5 my-7 items-start gap-5">
              {sideData.map((item) => (
                <Link key={item.id} href={""}>
                  {item.label}
                </Link>
              ))}
            </div>
            <hr />
            <div className="px-5 my-7">
              <p className="text-[13px]">
                <span className="rounded-full px-1 bg-blue-200">€</span> EUR
              </p>
              <select className="border-none mt-5 outline-none">
                <option>EN</option>
                <option>FR</option>
              </select>
            </div>
          </div>
        </Drawer>
      )}
    </Box>
  );
};

export default AndroidSidebar;
