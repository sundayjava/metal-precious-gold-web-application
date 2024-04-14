import trial from "../../public/triol.webp";
import Image from "next/image";

const SavingAssistance = () => {
  return (
    <div className="flex justify-between md:flex-row flex-col items-center mt-20 gap-4">
      <div className="md:w-[70%] w-full">
        <h1 className="font-bold md:text-[30px] text-[25px]">Try our savings assistant</h1>
        <p className="text-[18px] font-normal mt-11">
          Pick the right products to secure your savings. Simply select a metal,
          enter a budget, and our savings assistant will help you start!
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 items-center">
          <div className="flex flex-col">
            <label className="text-[14px]">Choose a metal</label>
            <select className="border px-5 py-3 border-primaryColor/50 text-black/70 text-14px] rounded-md">
              <option>Gold</option>
            </select>
          </div>
          <div>
            <label className="text-[14px]">Enter a budget</label>
            <div className="flex border px-3 py-3 border-primaryColor/50 text-black/70 text-14px] rounded-md">
              <select className="px-4">
                <option>Eur</option>
              </select>
              <input type="text" placeholder="5,000" className=" ms-4 border-none outline-none w-[50%]"/>
            </div>
          </div>
          <button className="text-[15px] font-bold text-white mt-6 py-3 px-3 rounded-lg bg-primaryColor hover:text-black hover:bg-primaryColor/30">Show my results</button>
        </div>
      </div>
      <div className="md:w-[20%] w-full">
        <Image
          src={trial}
          alt="pamp"
          className="w-[100%] h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SavingAssistance;
