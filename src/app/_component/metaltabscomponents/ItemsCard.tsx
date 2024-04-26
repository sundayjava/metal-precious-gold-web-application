"use client";

import Image from "next/image";
import { ShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { addToCart } from "@/app/_utility/apicall";

const ItemsCard = (props: { item: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { item } = props;

  const handleNavigate = (id: string) => {
    router.push(
      `/${localStorage.getItem("lang")}/buy/${
        item.parentcategory
      }/product/${id}`
    );
  };

  return (
    <div
      className={`cursor-pointer my-1 bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`cursor-pointer py-4 rounded-lg hover:shadow-xl h-[400px] w-full px-2 bg-white`}
        style={{ overflow: "hidden" }}
      >
        <div
          className="flex justify-center"
          onClick={() => handleNavigate(item.id)}
        >
          <Image
            src={item.imageUrl[1]}
            alt="imageslog"
            width={100}
            height={100}
            className="h-[190px] object-cover w-[80%]"
          />
        </div>
        <p className="line-clamp-2 text-center text-[15px] font-normal mt-6 h-[50px]">
          {item?.title}
        </p>
        <h1 className="text-center font-bold text-[18px] text-primaryColor mt-2">€{item?.price.toLocaleString()}</h1>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => addToCart(auth.currentUser?.email, item.id)}
            className="text-white grdientBtn font-bold px-6 py-3 mt-4 rounded-lg flex items-center gap-2"
          >
            <ShoppingCart sx={{ fontSize: 20 }} />
            <span className="text-[14px]">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
