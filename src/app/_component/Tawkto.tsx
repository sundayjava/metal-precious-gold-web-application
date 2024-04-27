import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/662c1081a0c6737bd1313257/1hse20vaj';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);

    return () => {
      document.head.removeChild(s1);
    };
  }, []);

  return null;
};

export default TawkToChat;