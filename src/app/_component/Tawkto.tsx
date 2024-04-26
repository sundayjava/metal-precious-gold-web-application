// import { useEffect } from 'react';

// const TawkToChat = () => {
//   useEffect(() => {
//     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//     (function(){
//     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//     s1.async=true;
//     s1.src='https://embed.tawk.to/662c1081a0c6737bd1313257/1hse20vaj';
//     s1.charset='UTF-8';
//     s1.setAttribute('crossorigin','*');
//     s0.parentNode.insertBefore(s1,s0);
//     })();

//     return () => {
//       document.head.removeChild(tawkToScript);
//     };
//   }, []);

//   return null;
// };

// export default TawkToChat;

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