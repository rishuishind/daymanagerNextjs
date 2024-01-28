import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Day Manager",
  description: "A simple app to make your daily tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <Navbar />
        <div className='h-[calc(100%-60px)]'>
          {children}
        </div>
      </body>
    </html>
  );
}
