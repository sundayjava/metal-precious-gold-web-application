"use client";

import CopyAllIcon from "@mui/icons-material/CopyAll";
import { useState } from "react";

const CopyButton = (props: { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copy status after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <button onClick={handleCopy} className={isCopied ? " bg-green-500 rounded-md px-3" : ""}>
      {isCopied ? "Copied!" : <CopyAllIcon sx={{fontSize:19}}/>}
    </button>
  );
};

export default CopyButton;
