import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import thisweek1 from "../../../../public/thisweek1.webp";
import thisweek2 from "../../../../public/thisweek2.webp";
import thisweek3 from "../../../../public/thisweek3.webp";
import SellIcon from "@mui/icons-material/Sell";

const WhatIsNew = () => {
  const newBlog = [
    {
      id: 1,
      img: thisweek1,
      time: "10 minutes read",
      title: "Uses for Gold: How Gold Is Used and How It Impacts Gold Prices",
      desc: "From currency to computers, there are plenty of real-world gold applications outside of its primary use as money. But how do common uses for gold impact gold prices? Let's find out.",
      tag1: "Did you know?",
      tag2: "Gold price",
    },
    {
      id: 2,
      img: thisweek2,
      time: "10 minutes read",
      title: "Is Gold Investment Reserved for the Wealthy?",
      desc: "Outdated, expensive, and elitist: both young investors and those with more modest incomes tend to overlook gold... and they're mistaken! Let's debunk the misconceptions about investment...",
      tag1: "Gold Savings",
      tag2: "Investment",
    },
    {
      id: 3,
      img: thisweek3,
      time: "15 minutes read",
      title: "A Comprehensive Guide to Investment Taxes: What Savers...",
      desc: "All you need to know about investment taxes on stocks, crypto, and precious metals when building your investment portfolio and savings.",
      tag1: "Investing",
      tag2: "Gold",
    },
  ];
  return (
    <div className="md:mt-32 mt-20">
      <div className="flex md:flex-row flex-col items-end justify-between">
        <div className="md:w-[60%] w-full">
          <h1 className="font-bold md:text-[32px] text-[24px]">
            What’s new this week?
          </h1>
          <p className="text-[19px] mt-4 font-normal">
            Learn more about what drives the markets and the economy and how to
            secure your savings by investing in gold, silver, and precious
            metals.
          </p>
        </div>
        <button className="md:flex hidden text-primaryColor hover-border gap-2 items-center">
          Discover our Blog <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1 mt-24">
        {newBlog.map((item) => (
          <div key={item.id}>
            <Image src={item.img} alt={item.title} className="h-[200px] w-full object-cover"/>
            <p className="my-3  text-gray-600 text-[17px] flex gap-3">
              <span className="text-primaryColor hover-border cursor-pointer">
                The Spotlight
              </span>
              {item.time}
            </p>
            <h1 className="text-[21px] font-bold hover:underline cursor-pointer">
              {item.title}
            </h1>
            <p className="my-4 text-[14px] text-black/80">{item.desc}</p>
            <div className="text-[14px] text-primaryColor font-light flex items-center gap-1">
              <SellIcon sx={{ transform: "rotate(75deg)", fontSize: 15, color:'gray' }} />
              <span className="cursor-pointer hover-border mr-4">
                {item.tag1}
              </span>
              <span className="cursor-pointer hover-border">
                {item.tag2}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end md:hidden my-16 gap-2 items-center">
        <button className="text-primaryColor hover-border">
        Discover our Blog <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
    </div>
  );
};

export default WhatIsNew;
