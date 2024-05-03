"use client";
import { useContext, useState } from "react";
import { Switch } from "@mui/material";
import MyContext from "@/Context/MyContext";
import Link from "next/link";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [menu, setMenu] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleItemClick = (itemName: string) => {
    setActive(itemName);
  };

  const isActive = (itemName: string) => active === itemName;

  return (
    <>
      <div className="absolute w-[280px]  bg-white h-full p-4 flex flex-col justify-between">
        <div>
          <h1 className="mb-8 text-3xl p-2">Logo</h1>
          <div className="flex gap-[12px] flex-col">
            {[
              { name: "Dashboard", icon: "../src/dashboard.png" },
              { name: "Income Management", icon: "../src/income.png" },
              { name: "Expense Tracking", icon: "../src/expense.png" },
              { name: "Investment Management", icon: "../src/investment.png" },
              { name: "Budget Planning", icon: "../src/accaunt.png" },
              { name: "Analysis", icon: "../src/report.png" },
            ].map((item, index) => (
              <Link
                href={item.name.replace(" ", "-").toLowerCase()}
                key={index}
                className={`text-l flex gap-2 items-center p-2 ${
                  isActive(item.name) ? "bg-active-bg text-[#06F]" : ""
                } hover:bg-gray-100 cursor-pointer`}
                onClick={() => {
                  handleItemClick(item.name);
                }}
              >
                <img src={item.icon} width="29px" alt={`${item.name} icon`} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          {/* <div className="sidebar__darkmode  h-12 flex gap-3 items-center justify-center bg-[#b9cbf3] bg-opacity-10 ">
            <img src="../src/icon-light-theme.svg" />
            <div>
              <Switch {...label} defaultChecked={false} />
            </div>
            <img src="../src/icon-dark-theme.svg" />
          </div> */}
          {/* <div className="p-6 flex gap-4">
            <img src="../src/eye-slash.svg" />
            <p className="text-gray-400 text-[15px] font-semibold leading-normal cursor-pointer">
              Hide Sidebar
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
