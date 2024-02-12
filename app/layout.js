import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AOSInit } from "@/utils/aos";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue Square",
  description: "Blue Square",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
