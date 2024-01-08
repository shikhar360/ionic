"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import SliderComponent from "./Slider";
import Approved from "./Approved";
import Amount from "./Amount";
import Tab from "./Tab";
import { useRouter } from "next/navigation";

interface IPopup {
  mode?: string;
}
const Popup = ({ mode = "DEFAULT" }: IPopup) => {
  // console.log(mode);
  const [active, setActive] = useState<string>("");
  const slide = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  useEffect(() => {
    if (mode === "DEFAULT" || "SUPPLY") {
      setActive("COLLATERAL");
    }

    if (mode === "BORROW") {
      setActive("BORROW");
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "DEFAULT") {
      if (active === "COLLATERAL") {
        slide.current.style.transform = "translateX(0%)";
      }
      if (active === "WITHDRAW") {
        slide.current.style.transform = "translateX(-100%)";
      }
      if (active === "BORROW") {
        slide.current.style.transform = "translateX(-200%)";
      }
      if (active === "REPAY") {
        slide.current.style.transform = "translateX(-300%)";
      }
    }
    if (mode === "SUPPLY") {
      if (active === "COLLATERAL") {
        slide.current.style.transform = "translateX(0%)";
      }
      if (active === "WITHDRAW") {
        slide.current.style.transform = "translateX(-100%)";
      }
    }
    if (mode === "BORROW") {
      if (active === "BORROW") {
        slide.current.style.transform = "translateX(0%)";
      }
      if (active === "REPAY") {
        slide.current.style.transform = "translateX(-100%)";
      }
    }
  }, [active, mode]);

  const [supplyUtilization, setSupplyUtilization] = useState<number>(0);
  const [supplyAmt, setSupplyAmt] = useState<number>(0);
  // console.log(supplyUtilization);
  // console.log(supplyAmt);

  return (
    <div
      className={` z-40 fixed top-0 right-0 w-full min-h-screen  bg-black/25 flex items-center justify-center`}
    >
      <div
        className={`w-[40%] relative  bg-grayUnselect rounded-xl max-h-[65vh] overflow-x-hidden overflow-y-scroll scrollbar-hide`}
      >
        <img
          src="/img/assets/close.png"
          alt="close"
          className={` h-5 z-10 absolute right-4 top-3 cursor-pointer `}
          onClick={() => router.back()}
        />
        <div className={`flex w-20 mx-auto mt-4 mb-2 h-10 relative`}>
          <img
            src="/img/logo/DUSD.png"
            alt="modlogo"
            className={`w-8 z-10 absolute `}
          />
          <img
            src="/img/logo/USDC.png"
            alt="modlogo"
            className={`w-8 z-20 absolute left-5`}
          />
        </div>
        <Tab setActive={setActive} mode={mode} active={active} />
        {/* all the respective slides */}

        <div
          ref={slide}
          className={`w-full transition-all duration-300 ease-linear h-min  flex`}
        >
          {(mode === "SUPPLY" || mode === "DEFAULT") && (
            <>
              {/* ---------------------------------------------------------------------------- */}
              {/* SUPPLY-Collateral section */}
              {/* ---------------------------------------------------------------------------- */}
              <div className={`min-w-full py-5 px-[6%] h-min `}>
                <Amount handleInput={setSupplyAmt} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-sm text-white/50 `}
                >
                  <span className={``}>COLLATERAL APR</span>
                  <span className={`font-bold pl-2`}>
                    4.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <p className={`text-[10px] text-white/50`}>
                  SUPPLYING UTILIZATION
                </p>
                <SliderComponent handleUtilization={setSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>COLLATERAL BALANCE</span>
                  <span className={`font-bold pl-2`}>
                    6.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>BORROW LIMIT</span>
                  <span className={`font-bold pl-2`}>
                    14.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>DAILY EARNINGS</span>
                  <span className={`font-bold pl-2`}>
                    44.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button className={`w-full rounded-md bg-stone-500 py-1  `}>
                    Approve DUSD
                  </button>
                  <button className={`w-full rounded-md bg-stone-500 py-1  `}>
                    COLLATERAL DUSD
                    {/* this will be dynamic */}
                  </button>
                </div>
                <Approved />
              </div>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-Withdraw section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount handleInput={setSupplyAmt} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-sm text-white/50 `}
                >
                  <span className={``}>COLLATERAL APR</span>
                  <span className={`font-bold pl-2`}>
                    4.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <p className={`text-[10px] text-white/50`}>
                  SUPPLYING UTILIZATION
                </p>
                <SliderComponent handleUtilization={setSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>COLLATERAL BALANCE</span>
                  <span className={`font-bold pl-2`}>
                    6.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>BORROW LIMIT</span>
                  <span className={`font-bold pl-2`}>
                    14.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>DAILY EARNINGS</span>
                  <span className={`font-bold pl-2`}>
                    44.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button className={`w-full rounded-md bg-stone-500 py-1  `}>
                    WITHDRAW DUSD
                  </button>
                </div>
                {/* <Approved /> */}
              </div>
            </>
          )}
          {(mode === "BORROW" || mode === "DEFAULT") && (
            <>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-borrow section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount handleInput={setSupplyAmt} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-sm text-white/50 `}
                >
                  <span className={``}>BORROWING LIMIT</span>
                  <span className={`font-bold pl-2`}>
                    0.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-sm text-white/50 `}
                >
                  <span className={``}>COLLATERAL APR</span>
                  <span className={`font-bold pl-2`}>
                    4.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <p className={`text-[10px] text-white/50`}>
                  SUPPLYING UTILIZATION
                </p>
                <SliderComponent handleUtilization={setSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>COLLATERAL BALANCE</span>
                  <span className={`font-bold pl-2`}>
                    6.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>BORROW LIMIT</span>
                  <span className={`font-bold pl-2`}>
                    14.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>DAILY EARNINGS</span>
                  <span className={`font-bold pl-2`}>
                    44.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button className={`w-full rounded-md bg-stone-500 py-1  `}>
                    BORROW USDC
                  </button>
                </div>
              </div>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-repay section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount handleInput={setSupplyAmt} />
                <SliderComponent handleUtilization={setSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-sm text-white/50 `}
                >
                  <span className={``}>CURRENTLY BORROWING</span>
                  <span className={`font-bold pl-2`}>
                    0.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-sm text-white/50 `}
                >
                  <span className={``}>COLLATERAL APR</span>
                  <span className={`font-bold pl-2`}>
                    4.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <p className={`text-[10px] text-white/50`}>
                  SUPPLYING UTILIZATION
                </p>
                <SliderComponent handleUtilization={setSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>COLLATERAL BALANCE</span>
                  <span className={`font-bold pl-2`}>
                    6.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>BORROW LIMIT</span>
                  <span className={`font-bold pl-2`}>
                    14.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 `}
                >
                  <span className={``}>DAILY EARNINGS</span>
                  <span className={`font-bold pl-2`}>
                    44.56%
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button className={`w-full rounded-md bg-stone-500 py-1  `}>
                    BORROW USDC
                  </button>
                  <button className={`w-full rounded-md bg-stone-500 py-1  `}>
                    COLLATERAL DUSD
                    {/* this will be dynamic */}
                  </button>
                </div>
                <Approved />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;

/*mode should be of 
supply consist of collateral , withdraw
 borrow ( borrow repay)
manage collateral withdraw borrow repay - default
*/

/* <div className={``}></div>  <p className={``}></p>
          <p className={``}></p>  colleteralT , borrowingT , lendingT , cAPR , lAPR , bAPR} */
