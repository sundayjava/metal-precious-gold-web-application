"use client";

import { Tabs, TabsProps } from "antd";
import BestSeller from "./metaltabscomponents/BestSeller";
import LimitedEdition from "./metaltabscomponents/LimitedEdition";
import Coins from "./metaltabscomponents/Coins";
import NewArrivals from "./metaltabscomponents/NewArrivals";
import { useEffect, useState } from "react";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "bestsellers",
    label: "Best Sellers",
    children: <BestSeller />,
  },
  {
    key: "limitededitions",
    label: "Limited Editions",
    children: <LimitedEdition />,
  },
  {
    key: "coins",
    label: "Coins",
    children: <Coins />,
  },
  {
    key: "newarrivals",
    label: "New Arrivals",
    children: <NewArrivals />,
  },
];

const MetalTabs = () => {
  const [isCentered, setIsCentered] = useState(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setIsCentered(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div>
      <div className="mt-20 mx-2">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          centered={isCentered}
          size="large"
          tabBarStyle={{
            fontWeight: 600
          }}
        />
      </div>
    </div>
  );
};

export default MetalTabs;
