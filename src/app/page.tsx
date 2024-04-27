"use client";

import CarouselSlideShow from "@/app/_component/dashboardcomponent/CarouselSlideShow";
import MetalTabs from "@/app/_component/dashboardcomponent/MetalTabs";
import SecureSaving from "@/app/_component/dashboardcomponent/SecureSaving";
import GoldSection from "@/app/_component/dashboardcomponent/GoldSection";
import SavingAssistance from "@/app/_component/dashboardcomponent/SavingAssistance";
import Usercarousel from "@/app/_component/dashboardcomponent/Usercarousel";
import FAQ from "@/app/_component/dashboardcomponent/FAQ";
import WhatIsNew from "@/app/_component/dashboardcomponent/WhatIsNew";
import Footer from "@/app/_component/globalcomponent/Footer";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import AndroidSidebar from "./_component/globalcomponent/AndroidSidebar";
import CustomHeader from "./_component/globalcomponent/CustomHeader";
import TawkToChat from "./_component/Tawkto";
import { auth } from "@/config/firebase";
import { CartData, getCartItem } from "./_utility/apicall";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width: 769px)");
  const [cartData, setCartData] = useState<CartData | null>(null);

  useEffect(() => {
    getCartItem(auth.currentUser?.email, setCartData);
  }, [auth.currentUser?.email]);

  return (
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
        <div className="mt-12 flex-grow">
          <div className="xl:px-[190px] lg:px-[100px] md:px-[40px] px-4 md:mt-7 w-full">
            <CarouselSlideShow />
            <MetalTabs setcartData = {setCartData}/>
            <SecureSaving />
            <GoldSection />
            <SavingAssistance />
            <Usercarousel />
            <FAQ />
            <WhatIsNew />
          </div>
          <Footer />
        </div>
      </Box>
      <TawkToChat />
    </Box>
  );
}
