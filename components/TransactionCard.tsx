import React from "react";

export default function TransactionCard() {
  return (
    <>
      <div className="w-[94%] bg-[#fff] min-h-[67px] rounded-[8px] p-3  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] bg-slate-200 rounded-[50%] flex justify-center items-center">
            <img src="../src/validating-ticket.png" width="24px" />
          </div>
          <div>
            <p className="text-base font-normal opacity-70">27 April, 2024</p>
            <span>Wolt, Tbilisi, 61 Agmashenebelis ave, Tbilisi, Georgia</span>
            <p className="text-base font-normal opacity-70">paid</p>
          </div>
        </div>
        <div>
          <p className="text-black text-base font-normal">$425.23</p>
          <div></div>
        </div>
      </div>
    </>
  );
}
