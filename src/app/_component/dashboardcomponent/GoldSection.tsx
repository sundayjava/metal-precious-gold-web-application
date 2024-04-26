import Image from "next/image";
import goldLogo from "../../../../public/goldlog.webp";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import leftos from "../../../../public/lefttos.webp";
import Link from "next/link";
const GoldSection = () => {
  return (
    <div className="mt-16 bg-white">
      <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[36px] font-[700] mb-[24px]">
            We’re here to help you save.
          </h1>
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] max-w-[750px]">
            Turn your money into physical gold with WARET GOLD.
          </p>
          <Link href="https://www.youtube.com/watch?v=qySv9Yw2SuQ" className="mt-4 gap-2 flex items-center md:justify-start justify-end text-darkaccent hover:text-primaryColor text-[15px] text-center">
            <SmartDisplayIcon sx={{ fontSize: 17, cursor: "pointer" }} />
            <span className="hover-border cursor-pointer">What is WARET GOLD</span>
          </Link>
        </div>
        <div className="w-[200px] h-[220px] md:block hidden">
          <Image
            src={goldLogo}
            alt="pamp"
            className="leading-[0] max-w-[100%]"
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
          <h1 className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[700] max-w-[750px]">Trust an industry expert</h1>
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[19px] mt-5 font-[400] max-w-[750px]">
            WARET GOLD is the official online retailer of the MKS PAMP GROUP, a
            Swiss family group with a global reputation.
          </p>
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[19px] mt-2 font-[400] max-w-[750px]">
            Over the past 60 years, the group has become the leader in the
            precious metals sector.
          </p>
          <p className="text-[16px] mt-2 font-bold text-secondaryColor">Let’s build for the long term.</p>
          <div className="mt-11">
          <Link href="en/about-us" className="text-accent hover:bg-primaryColor font-normal mt-11">
            Learn more about us <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldSection;
