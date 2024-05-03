"use client";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="absolute w-[100%] h-[80px] bg-[#fff] p-6 pl-[300px] flex justify-between ">
        <p className="text-[20px] font-bold mt-1">Welcome back, Roma</p>
        <div className="flex gap-4 items-center">
          <img
            src="../src/notifications.png"
            width="29px"
            className="cursor-pointer"
          />
          <img
            src="../src/settings.svg"
            width="29px"
            className="cursor-pointer"
          />
          <div className="w-[36px] h-[36px] bg-slate-300 rounded-[50%] cursor-pointer">
            <img src="../src/userlogo.png" />
          </div>
        </div>
      </header>
    </>
  );
}
