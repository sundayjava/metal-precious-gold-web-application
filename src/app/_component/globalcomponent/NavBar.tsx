import Image from "next/image";
import logo from "../../../../public/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between w-full lg:px-[240px] bg-secondaryColor py-7 fixed top-0 z-20 text-white md:px-[10px] px-1">
        <div className="flex items-center gap-4 text-white/80 hover:text-white">
          <Image
            src={logo}
            alt="log"
            className="md:w-[25px] w-[20px] md:h-[25px] h-[20px]"
          />
          <p className="uppercase cursor-pointer">waret gold</p>
        </div>
        <select className="bg-transparent cursor-pointer">
          <option>🏳️‍⚧️ EN</option>
        </select>
      </div>
    </>
  );
};

export default NavBar;
