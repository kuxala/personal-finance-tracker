import React from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar";
import TransactionCard from "@/components/TransactionCard";

export default function Dashboard() {
  return (
    <>
      <div className="flex gap-6 ">
        <Card
          mainText="Net Worth"
          balance="$450,000"
          bgColor="#DFFDFD"
          textColor="main-blue"
          roundedColor="#00295E"
          icon="increase.png"
          increasePercent="4"
        />
        <Card
          mainText="Monthly Cash Flow"
          balance="$25,000"
          bgColor="#D6F4E7"
          textColor="main-green"
          roundedColor="#003F45"
          icon="increase.png"
          increasePercent="15"
        />
        <Card
          mainText="Investment Performance"
          bgColor="#FFE8E0"
          balance="$5,000"
          textColor="main-red"
          roundedColor="#7A0815"
          icon="godown.png"
          increasePercent="2"
        />
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </>
  );
}
