import Image from "next/image";
import pamp from "../../../../public/pamp.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import Link from "next/link";

const SecureSaving = () => {
  const secureData = [
    {
      id: 1,
      title: "Buy",
      title1: "physical precious",
      title2: "metals",
      desc: "We selected the best physical products on the market, with Swiss-made PAMP® bars directly from the MKS PAMP refinery.",
      btnOne: "Browse our shop",
      url: "/en/buy/gold",
      btnDown: "How to buy gold and precious metals?",
    },
    {
      id: 2,
      title: "Store",
      title1: "for free with",
      title2: "no commitment",
      desc: "Simply choose our free insured storage directly in your cart, and we’ll store your products for you in our secure Swiss vaults. They'll remain available for resale or delivery at any time.",
      btnOne: "More about storage",
      url: "/en/physical-gold-storage-switzerland",
      btnDown: "How to store precious metals with WARET GOLD?",
    },
    {
      id: 3,
      title: "Resell",
      title1: "with 0%",
      title2: "commission",
      desc: "Easily manage and resell your precious metals savings 24/7, with no commission. Get your money, whenever you need it.",
      btnOne: "An easy-to-use account",
      url: "/en/Pricing",
      btnDown: "How to sell your precious metals?",
    },
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between gap-2 mt-10 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[36px] font-[700] mb-[24px]">
            Secure your savings
          </h1>
          <p className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] max-w-[750px]">
            Buy physical{" "}
            <span className="font-[700]">gold</span>,{" "}
            <span className="font-[700]">silver</span>,{" "}
            <span className="font-[700]">platinum</span>, and{" "}
            <span className="font-[700]">palladium</span> and
            build your precious metals savings from anywhere.
          </p>
        </div>
        <div className="w-[225px] h-[249px]">
          <Image
            src={pamp}
            alt="pamp"
            className="rotateImg leading-[0] max-w-[100%]"
          />
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col text-darkaccent py-10 grid-cols-1 sm:grid-cols-2 gap-8">
        {secureData.map((item) => (
          <div
            key={item.id}
            className="bg-white w-[33%] rounded-lg cursor-pointer shadow-lg  h-[500px] py-8 px-10"
          >
            <h1 className="text-[28px] font-[700] leading-[36px] hover:text-secondaryColor">
              {item.title}
            </h1>
            <h1 className="text-[28px] font-[700] leading-[36px] hover:text-secondaryColor">
              {item.title1}
            </h1>
            <h1 className="text-[28px] font-[700] leading-[36px] hover:text-secondaryColor">
              {item.title2}
            </h1>
            <p className="mt-4 text-[18px] leading-[28px] font-[400] h-[150px] hover:text-accent">
              {item.desc}
            </p>

            <div className="mt-5">
              <Link
                href={item.url}
                className="hover-border font-normal text-accent hover:text-primaryColor"
              >
                {item.btnOne} <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Link>
            </div>
            <Link
              href="https://www.youtube.com/watch?v=oh6X1A5wvIA&t=131s"
              className="mt-14 gap-2 flex items-start text-[15px] text-center text-accent hover:text-primaryColor"
            >
              <SmartDisplayIcon />
              <span className="hover-border">{item.btnDown}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecureSaving;
