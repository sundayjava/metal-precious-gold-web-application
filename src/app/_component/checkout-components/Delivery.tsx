import { FormControl, RadioGroup, FormControlLabel } from "@mui/material";
import { Radio } from "antd";

const Delivery = (props: { nextStep: any }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10">
        <form>
          <div>
            <p className="font-bold">Storage & Delivery</p>
            <button className="text-[12px] bg-primaryColor text-white px-3 py-[2px] ml-10 mt-10 rounded-full">
              VAT-FREE
            </button>
            <div className="flex gap-3 items-center mt-6">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label={
                      <div>
                        <p>Insured Storage</p>
                        <p className="text-[12px] font-extralight text-gray-500">Estimated storage fees: FREE</p>
                      </div>
                    }
                    // onChange={(e) =>
                    //   handleRadioFilterChange(section.id, e)
                    // }
                  />
                  <div className="my-4" />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label={
                      <div>
                        <p>Shipping Delivery details</p>
                        <p className="text-[12px] font-extralight text-gray-500">4-15 business days</p>
                      </div>
                    }
                    // onChange={(e) =>
                    //   handleRadioFilterChange(section.id, e)
                    // }
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <label className="text-[14px] font-extralight">Select shipping country:</label>
            <input
              type="text"
              placeholder="Phone number"
              className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="flex flex-col mt-8">
            <h1 className="font-bold text-[18px] my-4">Billing Address</h1>
            <input
              type="text"
              placeholder="Enter your address here"
              className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex flex-col col-span-1">
              <input
                type="text"
                placeholder="Street"
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
            <div className="flex flex-col col-span-1">
              <input
                type="text"
                placeholder="Number"
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Door code, floor #, company name, etc."
              className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex flex-col col-span-1">
              <input
                type="text"
                placeholder="Postal code"
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
            <div className="flex flex-col col-span-1">
              <input
                type="text"
                placeholder="City"
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Country"
              className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="mt-8">
            <button
              onClick={props.nextStep}
              className="px-4 py-2 rounded-md text-[15px] font-bold text-white bg-black"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
