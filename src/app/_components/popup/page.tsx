/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import SliderComponent from './Slider';

interface IPopup {
  mode?: string;
}
const Popup = ({ mode = "DEFAULT" }: IPopup) => {
  console.log(mode);
  const [active, setActive] = useState<string>("");
  const slide = useRef<HTMLDivElement>(null!);

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
  return (
    <div
      className={` z-40 fixed top-0 right-0 w-full min-h-screen bg-black/25 flex items-center justify-center`}
    >
      <div
        className={`w-[40%]  min-h-[65vh] bg-grayUnselect  overflow-x-hidden`}
      >
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
        <div
          className={`w-[96%] mx-auto rounded-lg bg-grayone py-1 grid ${
            mode === "DEFAULT" ? "grid-cols-4" : "grid-cols-2"
          } text-center gap-x-3 text-xs items-center justify-center`}
        >
          {(mode === "SUPPLY" || mode === "DEFAULT") && (
            <>
              <p
                onClick={() => setActive("COLLATERAL")}
                className={`rounded-md py-1 px-3  cursor-pointer ${
                  active === "COLLATERAL"
                    ? "bg-darkone text-accent "
                    : "text-white/40 "
                } transition-all duration-200 ease-linear `}
              >
                COLLATERAL
              </p>
              <p
                onClick={() => setActive("WITHDRAW")}
                className={` rounded-md py-1 px-3   ${
                  active === "WITHDRAW"
                    ? "bg-darkone text-accent "
                    : "text-white/40"
                } cursor-pointer transition-all duration-200 ease-linear`}
              >
                WITHDRAW
              </p>
            </>
          )}
          {(mode === "BORROW" || mode === "DEFAULT") && (
            <>
              <p
                onClick={() => setActive("BORROW")}
                className={` rounded-md py-1 px-3   ${
                  active === "BORROW"
                    ? "bg-darkone text-accent "
                    : "text-white/40"
                } cursor-pointer transition-all duration-200 ease-linear`}
              >
                BORROW
              </p>
              <p
                onClick={() => setActive("REPAY")}
                className={` rounded-md py-1 px-3   ${
                  active === "REPAY"
                    ? "bg-darkone text-accent "
                    : "text-white/40"
                } cursor-pointer transition-all duration-200 ease-linear`}
              >
                REPAY
              </p>
            </>
          )}
        </div>
        {/* all the respective slides */}

        <div
          ref={slide}
          className={`w-full transition-all duration-300 ease-linear min-h-full flex`}
        >
          {(mode === "SUPPLY" || mode === "DEFAULT") && (
            <>
              <div className={`min-w-full py-5`}>
                <SliderComponent/>
              </div>
              <div className={`min-w-full bg-blue-500`}>supply</div>{" "}
            </>
          )}
          {(mode === "BORROW" || mode === "DEFAULT") && (
            <>
              <div className={`min-w-full bg-red-500`}>borr</div>
              <div className={`min-w-full bg-violet-500`}>borr</div>
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
