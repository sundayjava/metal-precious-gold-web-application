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

const AndroidSidebar = (props: {
  isNonMobile: any;
  drawerWidth: any;
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}) => {
  const router = useRouter();
  const { drawerWidth, isNonMobile, isSidebarOpen, setIsSidebarOpen } = props;

  const naviageToPage = (url: string) => {
    router.push(url);
  };

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
      id: 3,
      label: "Precious mtals guide",
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
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <ChevronLeft sx={{ color: "white" }} />
              </IconButton>
            </div>

            <div className="">
              <h1 className="font-bold ml-2 my-2">Shops</h1>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "black" }}
                  >
                    Gold
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                  >
                    {goldData.map((item) => (
                      <div key={item.id}>
                        <button className="text-blue-700 text-[14px] font-bold">
                          {item.value}
                        </button>
                        <div className="flex flex-wrap gap-2 items-center">
                          {item.items?.map((item) => (
                            <span key={item.id} className="hover-border text-[12px] font-light">
                              {item.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "black" }}
                  >
                    Silver
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                  >
                    {silverData.map((item) => (
                      <div key={item.id}>
                        <button className="text-blue-700 text-[14px] font-bold">
                          {item.value}
                        </button>
                        <div className="flex flex-wrap gap-2 items-center">
                          {item.items?.map((item) => (
                            <span key={item.id} className="hover-border text-[12px] font-light">
                              {item.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "black" }}
                  >
                    Platinum
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                  >
                    {platinumData.map((item) => (
                      <div key={item.id}>
                        <button className="text-blue-700 text-[14px] font-bold">
                          {item.value}
                        </button>
                        <div className="flex flex-wrap gap-2 items-center">
                          {item.items?.map((item) => (
                            <span key={item.id} className="hover-border text-[12px] font-light">
                              {item.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "black" }}
                  >
                    Palladium
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                  >
                    {palladium.map((item) => (
                      <div key={item.id}>
                        <button className="text-blue-700 text-[14px] font-bold">
                          {item.value}
                        </button>
                        <div className="flex flex-wrap gap-2 items-center">
                          {item.items?.map((item) => (
                            <span key={item.id} className="hover-border text-[12px] font-light">
                              {item.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <div className="flex flex-col px-5 my-7 items-start gap-5">
              {sideData.map((item) => (
                <Link key={item.id} href={""}>{item.label}</Link>
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
