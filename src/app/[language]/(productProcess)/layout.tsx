"use client";

import { Box, useMediaQuery } from "@mui/material";
import "./style.css";
import Footer from "@/app/_component/globalcomponent/Footer";
import { useEffect, useState } from "react";
import AndroidSidebar from "@/app/_component/globalcomponent/AndroidSidebar";
import CustomHeader from "@/app/_component/globalcomponent/CustomHeader";
import TawkToChat from "@/app/_component/Tawkto";
import { auth } from "@/config/firebase";
import { CartData, getCartItem } from "@/app/_utility/apicall";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 769px)");
  const [cartData, setCartData] = useState<CartData | null>(null);

  useEffect(() => {
    getCartItem(auth.currentUser?.email, setCartData);
  }, [auth.currentUser?.email]);

  return (
    <html lang="en">
      <body className={`w-full`}>
        <Box>
          <AndroidSidebar
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Box className="flex flex-col min-h-screen">
            <CustomHeader
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              cartData={cartData}
            />
            <div className="flex-grow">
              <div className="xl:px-[190px] lg:px-[90px] md:px-[35px] px-1 w-full">
                {children}
              </div>
              <Footer />
            </div>
          </Box>
        </Box>
        <TawkToChat />
      </body>
    </html>
  );
}
