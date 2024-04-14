import CarouselSlideShow from "@/components/CarouselSlideShow";
import MetalTabs from "@/components/MetalTabs";
import SecureSaving from "@/components/SecureSaving";
import GoldSection from "@/components/GoldSection";
import SavingAssistance from "@/components/SavingAssistance";
import Usercarousel from "@/components/Usercarousel";
import FAQ from "@/components/FAQ";
import WhatIsNew from "@/components/WhatIsNew";

export default function Home() {
  return (
    <>
    <div className="xl:px-[190px] lg:px-[100px] md:px-[40px] px-4 md:mt-7 w-full">
      <CarouselSlideShow/>
       <MetalTabs/>
      <SecureSaving/>
      <GoldSection/>
      <SavingAssistance/>
      <Usercarousel/>
      <FAQ/>
      <WhatIsNew/>
    </div>
    </>
  );
}
