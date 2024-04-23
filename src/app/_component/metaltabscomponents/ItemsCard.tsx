"use client";

import Image from "next/image";
import { ShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { auth } from "@/config/firebase";
import { User } from "@/app/_utility/user";
import { addToCart } from "@/app/_utility/apicall";

const ItemsCard = (props: { item: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const router = useRouter();
  const { item } = props;

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

  const handleNavigate = (id: string) => {
    router.push(
      `/${localStorage.getItem("lang")}/buy/${
        item.parentcategory
      }/product/${id}`
    );
  };

  return (
    <div
      className={`cursor-pointer my-2 bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`cursor-pointer py-4 rounded-lg hover:shadow-xl relative bg-white`}
        style={{ overflow: "hidden" }}
      >
        <div
          className="flex justify-center"
          onClick={() => handleNavigate(item.id)}
        >
          {item.imageUrl?.slice(0, 1).map((itemss: any, index: number) => (
            <Image
              key={index}
              src={itemss}
              alt="imageslog"
              width={imageWidth}
              height={imageHeight}
            />
          ))}
        </div>
        <p className="text-[16px] line-clamp-2 text-center text-[#153358]/70 my-4">
          {item?.title}
        </p>
        <h1 className="text-center font-bold text-[18px]">€{item?.price}</h1>
        <p className="text-black/50 text-center text-[12px] mb-16">
          Fees: €{item?.discount} per oz
        </p>
        <div className="absolute bottom-3 left-0 w-full flex justify-center">
          <button
            onClick={() => addToCart(auth.currentUser?.email, item.id)}
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <ShoppingCart sx={{ fontSize: 18 }} />
            <span className="text-[14px]">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
