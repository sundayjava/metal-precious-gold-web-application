import Image from "next/image";
import goldLogo from "../../public/goldlog.webp";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import leftos from "../../public/lefttos.webp";
const GoldSection = () => {
  return (
    <div className="mt-16">
      <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="text-[25px] font-bold">
            We’re here to help you save.
          </h1>
          <p className="text-[20px] font-normal">
            Turn your money into physical gold with WARET GOLD.
          </p>
          <div className="mt-4 gap-2 flex items-center md:justify-start justify-end text-primaryColor text-[15px] text-center">
            <SmartDisplayIcon sx={{ fontSize: 17, cursor: "pointer" }} />
            <span className="hover-border cursor-pointer">What is WARET GOLD</span>
          </div>
        </div>
        <div className="md:w-[20%] w-full md:block hidden">
          <Image
            src={goldLogo}
            alt="pamp"
            className="w-[80%] h-[150px] object-contain"
          />
        </div>
      </div>
      <div className="gap-10 items-center flex md:flex-row flex-col justify-between mt-12">
        <div className="md:w-[50%] w-full">
          <Image
            src={leftos}
            alt="pamp"
            className="w-[100%] h-full object-contain"
          />
        </div>
        <div className="md:w-[50%] w-full">
          <h1 className="text-[25px] font-bold text-primaryColor">Trust an industry expert</h1>
          <p className="mt-8 md:w-[75%] w-full text-[18px]">
            WARET GOLD is the official online reseller of the MKS PAMP GROUP, a
            Swiss family group with a global reputation.
          </p>
          <p className="md:w-[75%] w-full text-[18px]">
            Over the past 60 years, the group has become the leader in the
            precious metals sector.
          </p>
          <p className="text-[16px] mt-2 font-bold text-secondaryColor">Let’s build for the long term.</p>
          <div className="mt-11">
          <span className="text-primaryColor hover-border font-normal mt-11">
            Learn more about us <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldSection;
