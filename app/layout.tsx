import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal finance tracker",
  description: "Created by kuxala ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ptSans.className}>
        <Header />
        <Sidebar />
        <div className="ml-[300px] relative top-[100px]">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
