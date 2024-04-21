import Image from "next/image";
import pamp from "../../../../public/pamp.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

const SecureSaving = () => {
  const secureData = [
    {
      id: 1,
      title: "Buy",
      title1: "physical precious",
      title2: "metals",
      desc: "We selected the best physical products on the market, with Swiss-made PAMP® bars directly from the MKS PAMP refinery.",
      btnOne: "Browse our shop",
      btnDown: "How to buy gold and precious metals?",
    },
    {
      id: 2,
      title: "Store",
      title1: "for free with",
      title2: "no commitment",
      desc: "Simply choose our free insured storage directly in your cart, and we’ll store your products for you in our secure Swiss vaults. They'll remain available for resale or delivery at any time.",
      btnOne: "More about storage",
      btnDown: "How to store precious metals with WARET GOLD?",
    },
    {
      id: 3,
      title: "Resell",
      title1: "with 0%",
      title2: "commission",
      desc: "Easily manage and resell your precious metals savings 24/7, with no commission. Get your money, whenever you need it.",
      btnOne: "An easy-to-use account",
      btnDown: "How to sell your precious metals?",
    },
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between gap-2 mt-10 items-center">
        <div className="md:w-[60%] w-full">
          <h1 className="md:text-[32px] text-[28px] font-bold">Secure your savings</h1>
          <p className="md:text-[20px] text-[17px] mt-4 font-normal">
            Buy physical <span className="text-primaryColor font-bold">gold</span>, <span className="text-primaryColor font-bold">silver</span>, <span className="text-primaryColor font-bold">platinum</span>, and <span className="text-primaryColor font-bold">palladium</span> and build your
            precious metals savings from anywhere.
          </p>
        </div>
        <div className="md:w-[20%] w-full">
          <Image src={pamp} alt="pamp" className="rotateImg md:h-[150px] h-[100px] object-contain"/>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10">
        {secureData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg cursor-pointer shadow-lg  h-[450px] py-8 px-5">
            <h1 className="text-[23px] hover:underline font-bold">{item.title}</h1>
            <h1 className="text-[23px] hover:underline font-bold">{item.title1}</h1>
            <h1 className="text-[23px] hover:underline font-bold">{item.title2}</h1>
            <p className="mt-4 text-[16px] md:w-[85%] w-full hover:underline font-light">{item.desc}</p>

            <div className="mt-5">
              <span className="text-primaryColor hover-border font-normal">
                {item.btnOne} <ArrowForwardIcon sx={{fontSize:16}}/>
              </span>
            </div>
            <div className="mt-14 gap-2 flex items-start text-black/40 md:text-primaryColor text-[15px] text-center">
              <SmartDisplayIcon />
              <span className="hover-border">{item.btnDown}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecureSaving;
