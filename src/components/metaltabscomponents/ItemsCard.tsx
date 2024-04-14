"use client";

import Image from "next/image";
import gold from "../../../public/gold.webp";
import { ShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";

const ItemsCard = (props: { item: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageWidth = viewportWidth < 640 ? 140 : 200;
  const imageHeight = viewportWidth < 640 ? 170 : 350;

  return (
    <div
      className={`cursor-pointer my-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`cursor-pointer py-4 rounded-md hover:shadow-lg relative`}
        style={{ overflow: "hidden" }}
      >
       <div className="flex justify-center">
       <Image
          src={props.item.img}
          alt="gold"
          width={imageWidth}
          height={imageHeight}
        />
       </div>
        <p className="text-[16px] line-clamp-2 text-center text-[#153358]/70 my-4">
         {props.item.title}
        </p>
        <h1 className="text-center font-bold text-[18px]">
          €{props.item.price}
        </h1>
        <p className="text-black/50 text-center text-[12px] mb-16">
          Fees: €{props.item.perprice} per oz
        </p>
        <div className="absolute bottom-3 left-0 w-full flex justify-center">
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <ShoppingCart sx={{ fontSize: 18 }} />
              <span className="text-[14px]">Add to cart</span>
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
