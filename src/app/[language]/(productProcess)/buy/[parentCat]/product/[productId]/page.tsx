"use client";

import { Tabs, TabsProps } from "antd";
import {
  Breadcrumbs,
  FormControlLabel,
  FormGroup,
  Link,
  Switch,
  SwitchProps,
  styled,
} from "@mui/material";
import Image from "next/image";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import { useState, useEffect } from "react";
import Overview from "@/app/_component/productDetailTab/Overview";
import Specifications from "@/app/_component/productDetailTab/Specifications";
import History from "@/app/_component/productDetailTab/History";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import axios from "axios";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const onChange = (key: string) => {
  console.log(key);
};

const ProductDetails = () => {
  const [itemData, setItemData] = useState<any>({});

  function handleBreadCumClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleBreadCumClick}
      sx={{ fontSize: 13 }}
    >
      {itemData?.parentcategory}
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleBreadCumClick}
      sx={{ fontSize: 13 }}
    >
      {itemData?.childcategory}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleBreadCumClick}
      sx={{ fontSize: 13 }}
    >
      {itemData?.title}
    </Link>,
  ];

  const findProductsById = async (id: string) => {
    const { data } = await axios.get(`/api/product/${id}`);
    setItemData(data.data);
  };

  useEffect(() => {
    const id = location.pathname.split("/")[5];
    findProductsById(id);
  });

  const items: TabsProps["items"] = [
    {
      key: "overview",
      label: "Overview",
      children: <Overview overview={itemData?.overview} />,
    },
    {
      key: "specification",
      label: "Specifications",
      children: <Specifications product={itemData} />,
    },
    {
      key: "history",
      label: "History",
      children: <History history={itemData?.history} />,
    },
  ];

  return (
    <>
      <div className="xl:px-[190px] lg:px-[80px] bg-white md:px-[28px] px-1 w-full">
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ marginTop: 8, paddingTop: 3 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="container mt-3">
          <div className="md:w-[40%] w-full h-[350px] inline-block float-left md:sticky md:top-[50px] top-0">
            <div className="inline-block align-top float-left">
              {itemData?.imageUrl
                ?.slice(0, 1)
                .map((itemss: any, index: number) => (
                  <Image
                    key={index}
                    src={itemss}
                    className="object-cover w-full h-full"
                    width={300}
                    height={300}
                    alt={"ghijkhiujk"}
                  />
                ))}
            </div>
          </div>
          <div className="md:w-[60%] pt-10 w-full inline-block align-top float-right lg:px-7 pl-10">
            <h1 className="text-[18px] font-bold block mb-10 mt-4">
              {itemData?.title}
            </h1>
            <div className="flex justify-start">
              <div className="border-2 bg-primaryColor/10 border-primaryColor rounded-lg md:p-7 p-2 relative">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 rounded-full bg-primaryColor flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-primaryColor/20"></div>
                  </div>
                  <h1 className="font-bold">Store in our ⚡ vault</h1>
                </div>
                <div className="ml-10 my-6">
                  <p className="font-bold text-[17px]">
                    €{itemData?.price}
                    <span className="text-[12px]"></span>
                  </p>
                  <p className="text-[14px] font-light">
                    Fees: €{itemData?.discount} per oz ({itemData?.percent}%)
                  </p>
                  <ul className="mt-5">
                    <li className="flex gap-3 items-center text-[14px]">
                      <CheckOutlinedIcon
                        sx={{ fontSize: 18, color: "green" }}
                      />
                      <span>VAT-FREE product</span>
                    </li>
                    <li className="flex gap-3 items-center text-[14px] mt-1">
                      <CheckOutlinedIcon
                        sx={{ fontSize: 18, color: "green" }}
                      />
                      <span>Free storage up to €10,000</span>
                    </li>
                    <li className="flex gap-3 items-center text-[14px] mt-1">
                      <CheckOutlinedIcon
                        sx={{ fontSize: 18, color: "green" }}
                      />
                      <span>Free & instant resale 24/7</span>
                    </li>
                    <li className="flex gap-3 items-center text-[14px] mt-1">
                      <CheckOutlinedIcon
                        sx={{ fontSize: 18, color: "green" }}
                      />
                      <span>Deliver at any time</span>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2 items-center text-[14px] font-light">
                  <ThumbUpOffAltOutlinedIcon sx={{ fontSize: 18 }} />
                  <span className="underline">
                    82% of users choose to store with us
                  </span>
                </div>
                <span className="absolute -top-3 left-[50%] bg-primaryColor rounded-full px-2 py-[2px] text-white font-bold text-[14px]">
                  VAT-FREE
                </span>
              </div>
            </div>
            <div className="flex gap-7 items-center mt-8">
              <div className="bg-gray-200 cursor-pointer px-3 py-2 text-[18px] rounded-md">
                -
              </div>
              <p>1</p>
              <div className="bg-gray-200 cursor-pointer px-3 py-2 text-[18px] rounded-md">
                +
              </div>
              <button className=" bg-primaryColor px-10 py-2 font-bold text-white rounded-lg">
                + Add to cart
              </button>
            </div>
            <div className="mt-8 flex gap-8 items-center">
              <div className="font-light text-[15px]">
                <p>Activate</p>
                <p className="underline mt-1">Auto-Saving for this product</p>
              </div>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked={false} />}
                  label=""
                />
              </FormGroup>
            </div>

            <div className="flex mt-8">
              <div className="border-2 rounded-lg md:p-7 p-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2" />
                  <select className="border-none underline outline-none font-bold">
                    <option>Delivered to Switzerland</option>
                    <option>Delivered to Italy</option>
                    <option>Delivered to France</option>
                    <option>Delivered to Germany</option>
                  </select>
                </div>
                <div className="ml-5 my-4">
                  <p className="font-bold text-[18px]">
                    €15,463.
                    <span className="text-[12px]">33</span>
                  </p>
                  <p>Fees: €2.48 per oz (8.02%)</p>
                </div>
                <div className="flex gap-2 items-center italic font-light">
                  <AirportShuttleOutlinedIcon sx={{ fontSize: 18 }} />
                  <span className="underline">
                    Additional delivery cost: €7.--
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 lg:mx-12 md:mx-5">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            centered={false}
            size="large"
            tabBarStyle={{
              fontWeight: 600,
            }}
          />
        </div>

        {/* <PurchasedTogether /> */}
      </div>
    </>
  );
};

export default ProductDetails;
