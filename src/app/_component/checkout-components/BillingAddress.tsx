import { auth } from "@/config/firebase";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, use, useEffect, useState } from "react";

const BillingAddress = (props: { nextStep: any }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [info, setInfo] = useState({
    phoneNumber: "",
    address: "",
    street: "",
    streetNumber: "",
    door: "",
    postalcode: "",
    city: "",
    country: "",
  });

  async function getProfile() {
    if (auth.currentUser?.email) {
      try {
        const response = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("lang", "en");
    getProfile();
  }, [auth.currentUser?.email]);
  

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

        const response = await fetch(`/api/user/${auth.currentUser?.email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: info.phoneNumber,
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
          console.log(response);
          alert(data.error);
          setLoading(false);
          return;
        }

        console.log(data);
        if (data.success == true) {
          props.nextStep()
          setLoading(false);
        }
     
    } catch (error) {
      alert("Network error");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10 w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="First name(s)"
                value={user?.firstname}
                className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Last name"
                value={user?.lastname}
                className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <input
              type="text"
              placeholder="Phone number"
               name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleChange}
              className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="flex flex-col mt-8">
            <h1 className="font-bold text-[18px] my-4">Billing Address</h1>
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
                 name="city"
                value={info.city}
                onChange={handleChange}
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
               name="country"
                value={info.country}
                onChange={handleChange}
              className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="mt-8">
            <button
              className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn bg-black"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
