import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AOSInit } from "@/utils/aos";

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
        <Header />
        <div className="z-[-10]">{children}</div>
      </body>
    </html>
  );
}
