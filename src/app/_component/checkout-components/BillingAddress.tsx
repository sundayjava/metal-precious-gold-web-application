const BillingAddress = (props: { nextStep: any }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10">
        <form>
          <div className="flex gap-5">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="First name(s)"
                className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Last name"
                className="px-4 py-2 border border-primaryColor/50 rounded-md outline-primaryColor"
              />
              <span className="text-[12px] italic font-light text-red-500"></span>
            </div>
          </div>
          <div className="flex flex-col mt-5">
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

export default BillingAddress;
