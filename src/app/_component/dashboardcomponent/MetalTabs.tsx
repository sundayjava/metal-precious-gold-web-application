"use client";

import { Tabs, TabsProps } from "antd";
import BestSeller from "../metaltabscomponents/BestSeller";
import LimitedEdition from "../metaltabscomponents/LimitedEdition";
import Coins from "../metaltabscomponents/Coins";
import NewArrivals from "../metaltabscomponents/NewArrivals";
import { useEffect, useState } from "react";
import axios from "axios";

const onChange = (key: string) => {
  console.log(key);
};

const MetalTabs = (props:{setcartData:any}) => {
  const [isCentered, setIsCentered] = useState(false);
  const [product, setProduct] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setIsCentered(window.innerWidth > 640);
    };
    if (typeof window !== "undefined") {
      setIsCentered(window.innerWidth > 640);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const getAllProduct = async() => {
    const { data } = await axios.get(`/api/product`);
    setProduct(data)
  }

  useEffect(() => {
    getAllProduct();
  });

  const items: TabsProps["items"] = [
    {
      key: "bestsellers",
      label: "Best Sellers",
      children: <BestSeller setcartData = {props.setcartData} product={product} />,
    },
    {
      key: "limitededitions",
      label: "Limited Editions",
      children: <LimitedEdition setcartData = {props.setcartData} product={product} />,
    },
    {
      key: "coins",
      label: "Coins",
      children: <Coins setcartData = {props.setcartData} product={product} />,
    },
    {
      key: "newarrivals",
      label: "New Arrivals",
      children: <NewArrivals setcartData = {props.setcartData} product={product} />,
    },
  ];

  return (
    <div>
      <div className="mt-16 mx-2 bg-white">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          centered={isCentered}
          size="large"
          tabBarStyle={{
            fontWeight: 600,
          }}
        />
      </div>
    </div>
  );
};

export default MetalTabs;
