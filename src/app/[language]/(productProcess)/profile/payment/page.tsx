"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { User } from "@/app/_utility/user";
import { auth, storage } from "@/config/firebase";
import axios from "axios";
import CopyButton from "@/app/_component/globalcomponent/CopyBtn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const WalletPayment = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const isNonMobile = useMediaQuery("(min-width: 769px)");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = React.useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [payment, setPayment] = useState({
    btcAddress: "",
    otherInfo: "",
    accnumber: "",
    acccountry: "",
    swift: "",
    accname: "",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPayment((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  async function getProfile() {
    if (auth.currentUser?.email) {
      try {
        const response = await axios.get<User>(
          `/api/user/${auth.currentUser?.email}`
        );
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("lang", "en");
    getProfile();
  }, [auth.currentUser?.email]);

  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
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
          currency: currency,
          btcAddress: payment.btcAddress,
          accountNumber: payment.accnumber,
          acccountry: payment.acccountry,
          swift: payment.swift,
          accName: payment.accname,
          otherInfo: payment.otherInfo,
          refNumber: generateRandomString(10),
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
        handleClose();
        alert("Information uploaded");
        setLoading(false);
      }
    } catch (error) {
      alert("Network error");
      setLoading(false);
    }
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isNonMobile ? 700 : "100%",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: 24,
    p: 4,
    maxHeight: "100vh",
    overflowY: "auto",
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ fontSize: 13 }}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ fontSize: 13 }}
    >
      Profile
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      sx={{ fontSize: 13 }}
    >
      Payment/Withdrawal
    </Link>,
  ];

  const handlePaymentSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      return;
    }
    try {
      setIsLoading(true);
      const user = await axios.get<User>(
        `/api/user/${auth.currentUser?.email}`
      );
      const storageRef = ref(storage, "payment");
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              console.log("Permission error");
              break;
            case "storage/canceled":
              console.log("storage/canceled");
              break;

            case "storage/unknown":
              console.log("storage/unknown");
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const response = await fetch("/api/payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: user.data.id,
                file: downloadURL,
              }),
            });

            const data = await response.json();
            if (data.success === true) {
              alert("Money deposited succesfully");
              handleClose2();
              setIsLoading(false);
            }
          });
        }
      );
    } catch (err) {
      setIsLoading(false);
    }
  };

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
    <div>
      <div>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ marginTop: 8, paddingTop: 3 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <h1 className="text-decoration-none pt-10 text-darkaccent leading-[46px] text-[30px] font-[700] mb-[24px]">
          Payment/Withdrawal
        </h1>
        <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
          Manage your default payment preferences.
        </p>
        <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[20px]">
          Personal payment information
        </p>
        <div className="flex justify-between items-center md:flex-row flex-col py-10 md:px-10 rounded-md px-3 shadow-lg bg-primaryColor/5">
          <div className="md:w-[49%] w-full">
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
              Your currency:
            </p>
            {user?.currency ? (
              <p className="text-decoration-none uppercase text-darkaccent leading-[21px] text-[18px] font-[700] mb-[40px]">
                {user?.currency}
              </p>
            ) : (
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[40px]">
                Not defined
              </p>
            )}
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[16px] font-[400] mb-[20px]">
              This is the currency used for all your transactions on WARET GOLD.
            </p>
          </div>
          <div className="md:w-[49%] w-full">
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[400] mb-[20px]">
              Your personal reference number:
            </p>
            {user?.refNumber ? (
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[40px]">
                {user?.refNumber}
              </p>
            ) : (
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[18px] font-[700] mb-[40px]">
                Not defined
              </p>
            )}
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[16px] font-[400] mb-[20px]">
              Please include this number in your online banking during all your
              wire transfer payments and deposits on WARET GOLD Pay. We need it
              to match the funds you transfer with your WARET GOLD account.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-decoration-none pt-2 text-darkaccent leading-[46px] text-[20px] font-[700]">
              WARET GOLD Pay
            </h1>
            <h1 className="text-decoration-none pt-2 text-accent cursor-pointer hover:text-primaryColor/50 leading-[46px] text-[16px]">
              Transaction history
            </h1>
          </div>
          <div className="py-3 flex justify-between md:flex-row flex-col items-center px-10 shadow-lg bg-white rounded-md">
            <div>
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[16px] font-[400] pt-5 mb-[10px]">
                WARET GOLD Pay Balance
              </p>
              {user?.balance ? (
                <h1 className="text-decoration-none pt-5 text-darkaccent leading-[46px] text-[26px] font-[700] mb-[24px]">
                  €{user?.balance}
                </h1>
              ) : (
                <h1 className="text-decoration-none pt-5 text-darkaccent leading-[46px] text-[26px] font-[700] mb-[24px]">
                  €0.00
                </h1>
              )}
            </div>
            <div className="flex gap-10 md:flex-row flex-col items-center">
              {user?.accountNumber || user?.btcAddress ? (
                <button
                  onClick={handleOpen2}
                  className="text-white text-[16px] font-bold grdientBtn px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white"
                >
                  Deposit funds
                </button>
              ) : (
                <button
                  onClick={handleOpen}
                  className="text-white text-[16px] font-bold grdientBtn px-10 py-3 rounded-md hover:text-primaryColor hover:bg-white"
                >
                  Deposit funds
                </button>
              )}
              <button
                className={`text-[16px] ${
                  user?.balance ? "cursor-pointer" : "cursor-not-allowed"
                } font-bold px-10 py-3 rounded-md border border-primaryColor/30 text-primaryColor hover:text-accent hover:bg-white`}
              >
                Withdraw funds
              </button>
            </div>
          </div>
          <div className="py-3 mt-4 flex md:flex-row flex-col justify-between items-center px-10 shadow-lg bg-white rounded-md">
            <div className="md:w-[65%] w-full">
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[16px] font-[700] pt-5 mb-[10px]">
                Manage your bank accounts used for withdrawals and for receiving
                any unused funds.
              </p>
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[14px] font-[400] pt-5 ">
                Your withdrawals will be credited to your main bank account
                within 3-5 business days.
              </p>
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[14px] font-[400] mb-[10px]">
                Any unused funds exceeding €3,000.00 will be automatically
                returned to your main bank account after 30 days.
              </p>
            </div>
            <div className="flex md:w-[35%] w-full gap-10 justify-center items-center">
              {user ? (
                <button
                  onClick={handleOpen}
                  className="text-[16px] font-bold px-10 py-3 rounded-md border border-primaryColor/30 text-primaryColor hover:text-accent hover:bg-white"
                >
                  Update bank account
                </button>
              ) : (
                <button
                  onClick={handleOpen}
                  className="text-[16px] font-bold px-10 py-3 rounded-md border border-primaryColor/30 text-primaryColor hover:text-accent hover:bg-white"
                >
                  Add bank account
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-decoration-none pt-10 text-darkaccent leading-[46px] text-[26px] font-[700] mb-[24px]">
            Add funds
          </h1>
          <p className="text-decoration-none text-center text-darkaccent leading-[21px] text-[16px] font-[400] mb-[20px]">
            Add funds to your wallet to start earning on every amount less than{" "}
            {user?.currency}100,000 generates 1%/mon, amount above
            $1 million generate 2%/mon. Adds funds to get started
          </p>

          <div>
            <p>Chose the wallet or account to save your money with</p>
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
                    lineClamp: 2,
                    overflowX: "scroll",
                  }}
                >
                  {item.desc}
                  <CopyButton textToCopy={item.desc} />
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <p className="text-decoration-none text-center text-darkaccent leading-[21px] text-[16px] font-[400] mb-[20px]">
            <span className="font-bold">Note: </span>Dont forget to add your reference number while making payment
          </p>

          <div className="mt-y">
            <form onSubmit={handlePaymentSubmit}>
              <div className="flex flex-col mt-4">
                <label className="text-[14px] text-gray-800 my-2">
                  Upload payment reciept here
                </label>

                <input
                  type="file"
                  placeholder=""
                  onChange={handleFileChange}
                  className="px-4 py-2 border border-gray-400 rounded-md outline-primaryColor w-full"
                />
                <span className="text-[12px] italic font-light text-red-500"></span>
              </div>

              <div className="mt-8">
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <button className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn">
                    Continue
                  </button>
                )}
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-decoration-none pt-10 text-darkaccent leading-[46px] text-[26px] font-[700] mb-[24px]">
            Add a bank account
          </h1>
          <p className="text-decoration-none text-center text-darkaccent leading-[21px] text-[16px] font-[400] mb-[20px]">
            Before setting up your deposit, please provide your bank details. We
            will use them to process your withdrawals from WARET GOLD Pay and to
            return any unused funds.
          </p>
          <div className="border border-primaryColor/30 bg-primaryColor/5 p-5 rounded-lg">
            <p className="text-decoration-none text-center text-darkaccent leading-[21px] text-[16px] font-[400] mb-[20px]">
              Make sure your bank details match your WARET GOLD information.
            </p>
            <div className="flex items-center gap-5">
              <p className="text-decoration-none text-center text-darkaccent leading-[21px] text-[16px] font-[700]">
                Beneficiary name:
              </p>
              <p className="text-decoration-none text-center text-darkaccent leading-[21px] text-[16px] font-[500]">
                {user?.firstname} {user?.lastname}
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="w-full mt-7">
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[14px] font-[700]">
                The currency of your bank account.
              </p>
              <Box sx={{ minWidth: "80%" }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ borderRadius: "8px" }}
                    value={currency}
                    label="Age"
                    onChange={handleChangeCurrency}
                  >
                    <MenuItem value={"eur"}>Euro EUR</MenuItem>
                    <MenuItem value={"chf"}>Swiss Franc CHF</MenuItem>
                    <MenuItem value={"usd"}>US Dollar USD</MenuItem>
                    <MenuItem value={"gbp"}>Pound GBP</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <p className="text-decoration-none text-accent leading-[21px] text-[12px] font-[500]">
                This currency will be set as your currency on WARET GOLD
              </p>
            </div>
            <div className="w-full mt-7">
              <p className="text-decoration-none text-darkaccent leading-[21px] text-[14px] font-[700]">
                Select the bank account information you will use: *
              </p>
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
                    label="BTC Wallet"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Account number"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mt-6" />
            {selectedValue === "1" ? (
              <TextField
                sx={{ width: "100%", marginBottom: 3 }}
                id="outlined-basic"
                type="text"
                name="btcAddress"
                value={payment.btcAddress}
                onChange={handleChange}
                label="BTC Address"
                variant="outlined"
              />
            ) : null}
            {selectedValue === "2" ? (
              <div>
                <TextField
                  sx={{ width: "100%", marginBottom: 3 }}
                  id="outlined-basic"
                  type="text"
                  name="accnumber"
                  value={payment.accnumber}
                  onChange={handleChange}
                  label="Account number"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", marginBottom: 3 }}
                  id="outlined-basic"
                  type="text"
                  name="acccountry"
                  value={payment.acccountry}
                  onChange={handleChange}
                  label="Country of your bank account"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", marginBottom: 3 }}
                  id="outlined-basic"
                  type="text"
                  name="swift"
                  value={payment.swift}
                  onChange={handleChange}
                  label="BIC/SWIFT"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", marginBottom: 3 }}
                  id="outlined-basic"
                  type="text"
                  name="accname"
                  value={payment.accname}
                  onChange={handleChange}
                  label="Bank name"
                  variant="outlined"
                />
              </div>
            ) : null}
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[14px] font-[700] mt-5">
              Other bank information required by your bank (optional)
            </p>
            <TextField
              sx={{ width: "100%", marginBottom: 3 }}
              id="outlined-basic"
              type="text"
              name="btcAddress"
              value={payment.btcAddress}
              onChange={handleChange}
              label="Routing number, Clearing number etc"
              variant="outlined"
            />
            <p className="text-decoration-none text-darkaccent leading-[21px] text-[16px] font-[400] mt-3">
              <span className="font-bold">NOTE:</span> This bank account will be
              used for returning any unused funds.
            </p>
            {loading ? (
              <CircularProgress />
            ) : (
              <div className="mt-12 flex justify-center gap-6 items-center">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 rounded-md text-[15px] font-bold border border-primaryColor/30 text-primaryColor"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 rounded-md text-[15px] font-bold text-white grdientBtn">
                  Save this bank account
                </button>
              </div>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default WalletPayment;
