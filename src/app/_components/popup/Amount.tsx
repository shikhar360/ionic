/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import dynamic from "next/dynamic";

interface IAmount {
  handleInput: (val: number) => void;
  asset?: string;
}
const Amount = ({ handleInput, asset = "DUSD" }: IAmount) => {
  //neeed to get the wallet balance
  const { address } = useAccount();
  const result = useBalance({
    address,
  });
  const { data } = result;
  // console.log(data);

  const [inp, setInp] = useState<number | undefined>(undefined);
  function handlInpData(e: React.ChangeEvent<HTMLInputElement>) {
    setInp(+e.target.value);

    handleInput(+e.target.value);
  }
  function handleMax(val: number) {
    setInp(val);
    handleInput(val);
  }
  // console.log(inp)
  return (
    <div className={`w-full flex-col items-start justify-start`}>
      <div className={`flex w-full items-center text-[10px] text-white/50 `}>
        <span className={``}>Amount</span>
        <span className={`ml-auto`}>
          Wallet Balance{" "}
          {data?.formatted ? Number(data.formatted).toFixed(2) : "0.00"}
        </span>
        <button
          onClick={() => handleMax(Number(data?.formatted))}
          className={`text-accent pl-2`}
        >
          MAX
        </button>
      </div>
      <div
        className={`flex w-full  pt-1.5 items-center text-lg text-white/50 `}
      >
        <input
          value={inp}
          type="number"
          placeholder="$0.00"
          className={`focus:outline-none  font-bold bg-transparent`}
          onChange={handlInpData}
        />
        <img
          src={`/img/logo/${asset}.png `}
          alt="link"
          className={`h-4 ml-auto`}
        />
        <span className={`text-white pl-2`}>{asset}</span>
      </div>
    </div>
  );
};

// export default Amount
export default dynamic(() => Promise.resolve(Amount), { ssr: false });
{
  /* <div className={``}></div> */
}
