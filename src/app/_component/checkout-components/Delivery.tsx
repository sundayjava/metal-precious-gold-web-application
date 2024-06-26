import { User } from "@/app/_utility/user";
import { auth } from "@/config/firebase";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

const Delivery = (props: { nextStep: any }) => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("2");
  const [info, setInfo] = useState({
    shippingAddress: "",
    phoneNumber: "",
    address: "",
    street: "",
    streetNumber: "",
    door: "",
    postalcode: "",
    city: "",
    country: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedValue !== "2") {
      props.nextStep();
    }

    try {
      setLoading(true);

      const response = await fetch(`/api/user/${auth.currentUser?.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: info.phoneNumber,
          shippingAddress: info.shippingAddress,
          address: info.address,
          street: info.street,
          streetNumber: info.streetNumber,
          door: info.door,
          postalcode: info.postalcode,
          city: info.city,
          country: info.country,
        }),
      });

      const data = await response.json();

      if (data.success !== true) {
        alert(data.error);
        setLoading(false);
        return;
      }

      console.log(data);
      if (data.success == true) {
        props.nextStep();
        setLoading(false);
      }
    } catch (error) {
      alert("Network error");
      setLoading(false);
    }
  };

  // async function getProfile() {
  //   if (auth.currentUser?.email) {
  //     try {
  //       const response = await axios.get<User>(
  //         `/api/user/${auth.currentUser?.email}`
  //       );

  //       if (
  //         response.data.phoneNumber.trim() !== '' &&
  //         response.data.country.trim() !== '' &&
  //         response.data.city.trim() !== '' &&
  //         response.data.address.trim() !== ''
  //       ) {
  //         props.nextStep();
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getProfile();
  // });

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px]">
              Storage & Delivery
            </p>
            <button className="text-[12px] grdientBtn text-white px-3 py-[2px] ml-10 mt-10 rounded-full">
              VAT-FREE
            </button>
            <div className="flex gap-3 items-center mt-6">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label={
                      <div>
                        <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400] max-w-[750px]">
                          Insured Storage
                        </p>
                        <p className="text-decoration-none text-darkaccent leading-[28px] text-[16px] font-[400] max-w-[750px]">
                          Estimated storage fees: FREE
                        </p>
                      </div>
                    }
                  />
                  <div className="my-4" />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label={
                      <div>
                        <p className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[400] max-w-[750px]">
                          Shipping Delivery details
                        </p>
                        <p className="text-decoration-none text-darkaccent leading-[28px] text-[16px] font-[400] max-w-[750px]">
                          4-15 business days
                        </p>
                      </div>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {selectedValue !== "1" ? (
            <div className="flex flex-col mt-10">
              <label className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px] mb-5">
                Enter shipping Address:
              </label>
              <input
                type="text"
                placeholder="Shipping Address"
                name="address"
                required
                value={info.address}
                onChange={handleChange}
                className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor w-full"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          ) : null}
          {selectedValue !== "1" ? (
            <div className="flex flex-col mt-8">
              <h1 className="text-decoration-none text-darkaccent leading-[28px] text-[20px] font-[600] max-w-[750px] mb-5">
                Billing Address
              </h1>
              <input
                type="text"
                placeholder="Enter your address here"
                name="address"
                value={info.address}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          ) : null}
          {selectedValue !== "1" ? (
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col col-span-1">
                <input
                  type="text"
                  placeholder="Street"
                  name="street"
                  value={info.street}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
                />
                <span className="text-[12px] italic font-light text-red-500"></span>
              </div>
              <div className="flex flex-col col-span-1">
                <input
                  type="text"
                  placeholder="Number"
                  name="streetNumber"
                  value={info.streetNumber}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
                />
                <span className="text-[12px] italic font-light text-red-500"></span>
              </div>
            </div>
          ) : null}
          {selectedValue !== "1" ? (
            <div className="flex flex-col mt-4">
              <input
                type="text"
                placeholder="Door code, floor #, company name, etc."
                name="door"
                value={info.door}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          ) : null}
          {selectedValue !== "1" ? (
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col col-span-1">
                <input
                  type="text"
                  placeholder="Postal code"
                  name="postalcode"
                  value={info.postalcode}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
                />
                <span className="text-[12px] italic font-light text-red-500"></span>
              </div>
              <div className="flex flex-col col-span-1">
                <input
                  type="text"
                  placeholder="City"
                  value={info.city}
                  onChange={handleChange}
                  name="city"
                  className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor"
                />
                <span className="text-[12px] italic font-light text-red-500"></span>
              </div>
            </div>
          ) : null}
          {selectedValue !== "1" ? (
            <div className="flex flex-col mt-4">
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={info.country}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          ) : null}
          <div className="mt-8">
            <button className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
