"use client";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import react, { useEffect, useState } from "react";
import Dashboard from "@/pages/dashboard";
import MyContext from "@/Context/MyContext";

export default function Home() {
  const [message, setMessage] = useState("Loading");
  const [selectedBoard, setSelectedBoard] = useState("dashboard");
  useEffect(() => {
    fetch("http://localhost:3000/api/home")
      .then((res) => res.json())
      .then((data: any) => {
        setMessage(data.message);
      });
  });

  return (
    <>
      <MyContext.Provider value={{ selectedBoard, setSelectedBoard }}>
        {/* <Header />
        <Sidebar />
        <div className="ml-[300px] relative top-[100px]"></div> */}
      </MyContext.Provider>
    </>
  );
}
