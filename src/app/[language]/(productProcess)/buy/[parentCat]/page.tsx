"use client";

import ItemsCard from "@/app/_component/metaltabscomponents/ItemsCard";
import { bestSellData } from "@/app/_utility/metalData";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { filters } from "@/app/_utility/filterData";
import { Remove, Add } from "@mui/icons-material";

const page = () => {
  const sortOptions = [
    { id: 1, value: "default", label: "Default" },
    { id: 2, value: "pricelow", label: "Price (Low to High)" },
    { id: 3, value: "pricehigh", label: "Price (High to Low)" },
  ];

  return (
    <>
      <div className="container mt-16 md:px-7 px-2 rounded-lg">
        <div className="md:w-[20%] w-[25%] h-[750px] inline-block float-left sticky top-[50px] overflow-y-scroll">
          <div className="flex md:justify-center overflow-x-scroll">
          <form>
            <h1 className="font-bold text-start">Filters</h1>
            {filters.map((section) => (
              <div key={section.id} className="border-b border-gray-200 py-6 ">
                <>
                  <h3 className="my-3 flow-root">
                    <span className="font-medium text-gray-900">
                      {section.name}
                    </span>
                  </h3>
                  <div className="space-y-2">
                    {section.options.map((option: any, optionIdx: any) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          // onChange={() =>
                          //   handleFilter(option.value, section.id)
                          // }
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            ))}
          </form>
          </div>
        </div>
        <div className="md:w-[80%] w-[75%] inline-block align-top float-right lg:px-12 md:px-7 px-1">
          <h1 className="font-bold lg:text-[17px] md:text-[15px] sm:text-[13px] text-[12px]">
            Buy gold, with Free Storage in Switzerland and Resale without
            Commission
          </h1>
          <div className="flex justify-between items-center">
            <p className="bg-slate-200 rounded-md px-1 md:block hidden">Gold *</p>
            <div className="border border-primaryColor rounded-md my-16 md:mr-32 mr-1 px-3 py-1 text-[13px] flex items-center">

              <span className="font-bold border-r">Sort by: </span>
              <select className="border-none outline-none">
                {sortOptions.map((item) => (
                  <option value={item.value} key={item.id} className="py-2">
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {bestSellData.map((item) => (
              <ItemsCard item={item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-end mt-28 mb-10">
            <Pagination
              count={7}
              renderItem={(bestSellData) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...bestSellData}
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;