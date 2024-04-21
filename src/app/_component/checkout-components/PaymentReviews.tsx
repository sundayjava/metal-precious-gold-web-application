import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import CopyButton from "../globalcomponent/CopyBtn";

const PaymentReviews = (props: { finalStep: any }) => {
  const paymentMethods = [
    {
      id: 1,
      title: "Bitcoin",
      desc: "hbjwe882u012bjbd980u09eu02ejbsfs8u108ue082jve-eff",
    },
    {
      id: 2,
      title: "Bank Transfer",
      desc: "9079029135",
    },
  ];

  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="bg-white rounded-md border-l-[8px] custom-box-shadow border-primaryColor p-10 w-full">
        <div className="w-full">
          <h1>Choose payment method</h1>
          <div className="md:w-[60%] w-full">
            {paymentMethods.map((item) => (
              <Accordion
                key={item.id}
                sx={{
                  boxShadow: "none",
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    borderRadius: 3,
                    ":hover": {
                      backgroundColor: "#dceff7",
                    },
                  }}
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    borderRadius: 5,
                    gap: "8px",
                    lineClamp:2,
                    overflowX:'scroll'
                  }}
                >
                  {item.desc}
                  <CopyButton textToCopy={item.desc} />
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <form>
          <div className="flex flex-col mt-4">
            <label className="text-[14px] text-gray-800 my-2">
              Upload payment reciept here
            </label>
            <input
              type="file"
              placeholder=""
              className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
            />
            <span className="text-[12px] italic font-light text-red-500"></span>
          </div>
          <div className="mt-8">
            <button
              onClick={props.finalStep}
              className="px-4 py-2 rounded-md text-[15px] font-bold text-white bg-black"
            >
              Place order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentReviews;
