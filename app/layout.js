import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AOSInit } from "@/utils/aos";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { WhatsApp } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue Square",
  description: "Blue Square",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R7RXFDNY7Q"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-R7RXFDNY7Q',{page_path:window.location.pathname});`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2005266043198777');
fbq('track', 'PageView');
`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2005266043198777&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <AOSInit />
      <body className={`${inter.className} bg-gray-800`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Header />
        <div className="z-[-10]">{children}</div>
      </body>
    </html>
  );
}
