import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waret Gold",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        {/* <Script
          id="_smartsupp"
          src="https://www.smartsuppchat.com/loader.js"
          strategy="beforeInteractive"
          
        >
          {`
          var _smartsupp = _smartsupp || {};
          _smartsupp.key = '8b31d8444173549c45249f2fd9bd45d2d184063c';
          window.smartsupp||(function(d) {
            var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
            s=d.getElementsByTagName('script')[0];c=d.createElement('script');
            c.type='text/javascript';c.charset='utf-8';c.async=true;
            c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
          })(document);
        `}
        </Script> */}
        {children}
        
      </body>
    </html>
  );
}
