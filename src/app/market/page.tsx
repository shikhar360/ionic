/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import PoolToggle from "../_components/markets/PoolToggle";
import PoolRows from "../_components/markets/PoolRows";
import Popup from "../_components/popup/page";

export default function Market() {

  const poolrow = [
    {
      asset: "MODE",
      colleteralT: 168,
      borrowingT: 234,
      lendingT: 65,
      cAPR: 2,
      lAPR: 5,
      bAPR: 8,
    },
    {
      asset: "ETH",
      colleteralT: 454,
      borrowingT: 435,
      lendingT: 65655,
      cAPR: 25,
      lAPR: 45,
      bAPR: 8345,
    },
    {
      asset: "USDC",
      colleteralT: 16458,
      borrowingT: 26734,
      lendingT: 675,
      cAPR: 72,
      lAPR: 57,
      bAPR: 88,
    },
    {
      asset: "USDT",
      colleteralT: 657168,
      borrowingT: 56234,
      lendingT: 665,
      cAPR: 266,
      lAPR: 56,
      bAPR: 68,
    },
  ];

  
  return (
    <main className={`pt-14`}>
      <div className="w-full  flex flex-col items-center justify-start min-h-screen transition-all duration-200 ease-linear">
        <div
          className={`w-full flex flex-col items-start py-4 justify-start bg-grayone h-min px-[3%] rounded-xl`}
        >
          <div className={`flex items-center justify-center gap-2 py-3 pt-2 `}>
            <img src="/img/logo/MODE.png" alt="modlogo" className={`w-8`} />
            <h1 className={`font-semibold`}>Mode Market</h1>
            <img
              src="/img/assets/downarr.png"
              alt="downarr"
              className={`w-4`}
            />
          </div>
          <div className={`w-full flex items-center gap-4`}>
            <div
              className={`flex flex-col items-start justify-center  gap-y-1`}
            >
              <p className={`text-white/60 text-sm`}>Total Market Size</p>
              <p className={`font-semibold`}>$1.4B</p>
              {/* this neeeds to be changed */}
            </div>
            <div className={`flex flex-col items-start justify-center gap-y-1`}>
              <p className={`text-white/60 text-sm`}>Total Available</p>
              <p className={`font-semibold`}>$1.22M</p>
              {/* this neeeds to be changed */}
            </div>
            <div className={`flex flex-col items-start justify-center gap-y-1`}>
              <p className={`text-white/60 text-sm`}>Total Borrows</p>
              <p className={`font-semibold`}>$456M</p>
              {/* this neeeds to be changed */}
            </div>
          </div>
        </div>
        <div className={`bg-grayone min-h-[60vh] pb-20 w-full px-[3%] mt-3 rounded-xl`}>
          <div className={` w-full flex items-center justify-center py-3 `}>
            <h1 className={`font-semibold`}>Mode Lending & Borrowing</h1>
            <div
              className={`ml-auto flex gap-x-2 items-center justify-center `}
            >
              <img
                src="/img/assets/search.png"
                alt="searchico"
                className={`h-4`}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by assetvname, symbol or address"
                className={
                  " placeholder:text-xs bg-grayone border-r px-2 border-white/20"
                }
              />
              <div className={`flex items-center justify-center text-xs px-2`}>
                Sort by{" "}
                <img
                  src="/img/assets/downarr.png"
                  alt="downarr"
                  className={`w-4`}
                />
              </div>
            </div>
          </div>
          <PoolToggle />
          <div
            className={`w-full gap-x-1 grid  grid-cols-18 items-start py-4 text-[10px] text-white/40 font-semibold text-center px-2 `}
          >
            <h3 className={` col-span-2  `}>ASSETS</h3>
            <h3 className={` col-span-2`}>TOTAL COLLATERAL</h3>
            <h3 className={` col-span-2`}>TOTAL LENDING</h3>
            <h3 className={` col-span-2`}>TOTAL BORROWING</h3>
            <h3 className={` col-span-3`}>COLLATERAL APR</h3>
            <h3 className={` col-span-2`}>LENDING APR</h3>
            <h3 className={` col-span-2`}>BORROW APR</h3>
            <h3 className={` col-span-4`}>SUPPLY/BORROW</h3>
            <h3 className={`col-span-2`}>DETAILS</h3>
          </div>
          {poolrow &&
            poolrow.map((val: any, idx: number) => (
              <PoolRows
                key={idx}
                asset={val.asset}
                colleteralT={val.colleteralT}
                borrowingT={val.borrowingT}
                lendingT={val.lendingT}
                cAPR={val.cAPR}
                lAPR={val.lAPR}
                bAPR={val.bAPR}
              />
            ))}
        </div>
      </div>
      {/* <Popup  /> */}
    </main>
  );
}

{
  /* <div className={``}></div>  <p className={``}></p>
          <p className={``}></p>  colleteralT , borrowingT , lendingT , cAPR , lAPR , bAPR} */
}
