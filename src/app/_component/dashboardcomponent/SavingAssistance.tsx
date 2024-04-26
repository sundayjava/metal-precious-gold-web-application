import trial from "../../../../public/triol.webp";
import Image from "next/image";

const SavingAssistance = () => {
  return (
    <div className="flex justify-between md:flex-row flex-col items-center mt-20 gap-4">
      <div className="md:w-[70%] w-full">
        <h1 className="text-decoration-none text-darkaccent leading-[46px] text-[36px] font-[700] mb-[24px]">Try our savings assistant</h1>
        <p className="text-decoration-none text-darkaccent leading-[32px] text-[24px] font-[400] max-w-[750px]">
          Pick the right products to secure your savings. Simply select a metal,
          enter a budget, and our savings assistant will help you start!
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 items-center">
          <div className="flex flex-col">
            <label className="text-[15px] text-darkaccent">Choose a metal</label>
            <select className="border px-5 py-3 border-primaryColor/50 text-black/70 text-14px] rounded-md">
              <option>Gold</option>
            </select>
          </div>
          <div>
            <label className="text-[15px] text-darkaccent">Enter a budget</label>
            <div className="flex border px-3 py-3 bg-white border-primaryColor/50 text-black/70 text-14px] rounded-md">
              <select className="px-4">
                <option>Eur</option>
              </select>
              <input type="text" placeholder="5,000" className=" ms-4 border-none outline-none w-[50%]"/>
            </div>
          </div>
          <button disabled className="text-[15px] font-bold cursor-not-allowed text-white mt-6 py-3 px-3 rounded-lg grdientBtn hover:text-black hover:bg-primaryColor/30">Show my results</button>
        </div>
      </div>
      <div className="w-[200px] h-[220px]">
        <Image
          src={trial}
          alt="pamp"
          className="leading-[0] max-w-[100%]"
        />
      </div>
    </div>
  );
};

export default SavingAssistance;
