import React from "react";

export default function Card({
  balance,
  bgColor,
  textColor,
  roundedColor,
  mainText,
  icon,
  increasePercent,
}: any) {
  return (
    <>
      <div
        className={`w-[30%] h-[280px] rounded-[10px] p-6`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-between gap-4">
          <div>
            <p className={`${textColor} text-[20px] pt-4 pb-6`}>{mainText}</p>
            <p className={`${textColor} text-[48px]`}>{balance}</p>
          </div>
          <div>
            <div
              className={`w-[65px] h-[65px] ] rounded-[50%] flex justify-center items-center`}
              style={{ backgroundColor: roundedColor }}
            >
              <img src="../src/icon-white.png" width="32px" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          <img src={`../src/${icon}`} width="20px" />
          <p className={`${textColor}`}>{increasePercent}% than last month</p>
        </div>
      </div>
    </>
  );
}
