import CarouselSlideShow from "@/app/_component/dashboardcomponent/CarouselSlideShow";
import MetalTabs from "@/app/_component/dashboardcomponent/MetalTabs";
import SecureSaving from "@/app/_component/dashboardcomponent/SecureSaving";
import GoldSection from "@/app/_component/dashboardcomponent/GoldSection";
import SavingAssistance from "@/app/_component/dashboardcomponent/SavingAssistance";
import Usercarousel from "@/app/_component/dashboardcomponent/Usercarousel";
import FAQ from "@/app/_component/dashboardcomponent/FAQ";
import WhatIsNew from "@/app/_component/dashboardcomponent/WhatIsNew";
import Header from "@/app/_component/globalcomponent/Header";
import Footer from "@/app/_component/globalcomponent/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="md:mt-40 mt-32 flex-grow">
        <div className="xl:px-[190px] lg:px-[100px] md:px-[40px] px-4 md:mt-7 w-full">
          <CarouselSlideShow />
          <MetalTabs />
          <SecureSaving />
          <GoldSection />
          <SavingAssistance />
          <Usercarousel />
          <FAQ />
          <WhatIsNew />
        </div>
      </div>
      <Footer />
    </div>
  );
}
