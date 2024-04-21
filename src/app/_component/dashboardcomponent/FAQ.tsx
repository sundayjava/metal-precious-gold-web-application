import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import silverIkg from "../../../../public/silver1kg.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FAQ = () => {
  const accordiondata = [
    {
      id: 1,
      title: "Do I own the precious metals I buy on WARET GOLD?",
      desc: "You own 100% of the products you buy on WARET GOLD. All your stored products are physically kept in our secure vaults and off our balance sheet, so you remain their unique legal owner even if WARET GOLD were to cease its business activities. Indeed, WARET GOLD only sells allocated precious metals that belong entirely to you. Other resellers can sell “mutualized” gold, often as a 12.5 kg bar shared with other customers. Although a part of it technically belongs to you, it can be difficult to resell and is usually not available to redeem. Some resellers even sell “paper gold”, which is not physical gold itself but an asset reflecting the price of gold and not necessarily backed by real physical gold.",
    },
    {
      id: 2,
      title: "Is there any guarantee for my purchases on WARET GOLD?",
      desc: "All precious metals bars sold on WARET GOLD are sealed and come with a purity certificate. We also provide a downloadable certificate of ownership for each stored product and a printable invoice with each purchase. This way, you always have paper proof of your ownership. Minted bars come with the CertiPAMP packaging which serves as their purity certificate. We advise leaving these products in their sealed packaging to ensure the validity of their purity certificate. Some of our products also come with the Veriscan technology, an MKS PAMP SA application used to securely identify precious metals products and their purity.",
    },
    {
      id: 3,
      title: "What is the quality of the products on WARET GOLD?",
      desc: "Our precious metals bars and coins come directly from the most reputable mints and have undergone extensive quality control. Our parent company, the MKS PAMP GROUP is part of the LBMA (London Bullion Market Association), therefore, all precious metals produced by the Swiss MKS PAMP refinery are LBMA-approved. Our Swiss-made gold bars are all newly minted and 999.9 fine gold (24 carats). You can find all the information on all our bars and coins’ purity directly on their product page.",
    },
    {
      id: 4,
      title: "What is WARET GOLD Pay?",
      desc: "WARET GOLD Pay is our instant payment and withdrawal solution. It is a free and secure way to manage your funds on WARET GOLD. Before an order, top it up with a simple wire transfer and use it as a secure payment method. When you sell a stored product on WARET GOLD, your funds will be directly added to your WARET GOLD Pay. You can then use your funds to place a new order or send them back to your personal bank account. If the funds on your WARET GOLD Pay don’t cover the full price of an order, you can simply use your saved credit cards during checkout to pay the remainder! Read more about the payment methods available on WARET GOLD on our pricing page.",
    },
    {
      id: 5,
      title:
        "Can the precious metals I store with WARET GOLD be physically delivered to me?",
      desc: "Yes, you can ask for your stored products to be delivered to you 24/7, directly from your personal account. We ship in all of Europe in 4-10 business days and all parcels are securely wrapped up and insured against theft, damage, and loss. You can find the list of countries and our standard shipping prices on our pricing page. Please note that if you choose to deliver your VAT-FREE silver, platinum, or palladium products, VAT will be applied back, along with shipping and insurance fees. Don’t forget to check your country's VAT rates before shipping.",
    },
    {
      id: 6,
      title:
        "What are the fees and commissions when I buy, store, or sell on WARET GOLD?",
      desc: "Like any precious metals reseller, we charge a margin (also called “premium”) on each product, it`s the part of the price that covers our costs and reseller's margin. This margin is already included in the prices you see in our shop. To better understand how the price of a product works, simply click on it to see a detailed breakdown. Any product you store with us is fully insured against loss, theft, and damage, for free. Storage is also free for up to CHF10,000 in storage value, and if you want to store larger quantities, you only pay a fixed fee of CHF8/month up to CHF100,000 in storage value. And that’s it. That’s the only fees we will charge on WARET GOLD. At resale, we do not take any fee or commission and offer instant buyback, at spot price for all the products you store with us. This means that we will pay you the full market price for your product, whenever you want to sell. You can read more about this on our storage solution page.",
    },
    {
      id: 7,
      title: "Why should I save in gold in 2024?",
      desc: "While the gold price has seen fluctuations in 2021, it has increased by over 60% in the past 5 years, and gold has historically performed well in times of inflation and economic uncertainty.Today, investors often buy gold for two reasons. First, to secure their savings instead of leaving their money in a savings account to be eaten away by inflation. Then, to diversify their portfolio and protect it against risks they might take elsewhere (stocks, cryptocurrencies, real estate, etc.) Many buyers also choose to save gold on a regular basis to smooth out the changes in price that can happen in the short to medium term. Saving in gold is a way to secure your savings and build wealth on the long term. To learn more about savings, investments, and precious metals, visit our blog and subscribe to our educational newsletter!",
    },
  ];
  return (
    <div className="mt-32 bg-white">
      <div className="flex items-end justify-between">
        <div className="md:w-[60%] w-full">
          <h1 className="font-bold md:text-[32px] text-[27px]">
            Frequently asked questions
          </h1>
          <p className="text-[19px] mt-4 font-normal">
            Read the most frequently asked questions from savers and investors
            on WARET GOLD and on how to buy gold, silver, and precious metals.
          </p>
        </div>
        <button className="md:flex hidden text-primaryColor hover-border gap-2 items-center">
          More FAQ <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
      <div className="sm:flex justify-between items-center">
        <div className="mt-16 md:w-[60%] w-full">
          {accordiondata.map((item) => (
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
                  padding: 2,
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
                  backgroundColor: "#dceff7",
                  paddingY: 5,
                  borderRadius: 5,
                  marginBottom: 4,
                }}
              >
                {item.desc}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div>
          <Image
            src={silverIkg}
            alt="silver 1kg"
            className="h-[400px] object-contain sm:block hidden"
          />
        </div>
      </div>
      <div className="flex justify-end md:hidden gap-2 items-center">
        <button className="text-primaryColor hover-border">
          More FAQ <ArrowForwardIcon sx={{ fontSize: 17 }} />
        </button>
      </div>
    </div>
  );
};

export default FAQ;
