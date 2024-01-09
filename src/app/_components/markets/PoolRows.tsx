/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'

import React from 'react'


interface IRows {
  asset : string , colleteralT : number , borrowingT : number , lendingT : number , cAPR : number , lAPR : number , bAPR : number
}
const PoolRows = ({asset , colleteralT , borrowingT , lendingT , cAPR , lAPR , bAPR} : IRows) => {
  
  return (
    <div
    className={`w-full hover:bg-graylite transition-all duration-200 ease-linear bg-grayUnselect rounded-xl mb-3 px-2  gap-x-1 grid  grid-cols-21  py-4 text-xs text-white/80 font-semibold text-center items-center `}
  >
    <div className={`col-span-2  flex gap-2 items-center justify-center  `}>
      <img src={`/img/logo/${asset}.png `} alt={asset} className='h-7' />
      <h3 className={` `}>{asset}</h3>
    </div>
    <h3 className={` col-span-2`}>{colleteralT}</h3>
    <h3 className={` col-span-2`}>{lendingT}</h3>
    <h3 className={` col-span-2`}>{borrowingT}</h3>
    <h3 className={` col-span-3`}>{cAPR}</h3>
    <h3 className={` col-span-2`}>{lAPR}</h3>
    <h3 className={` col-span-2`}>{bAPR}</h3>
    <div className={` col-span-4 flex items-center justify-center gap-3`}>
    <Link  href={`/market?popmode=SUPPLY`} className={`rounded-lg bg-accent text-black py-1.5 px-3`}>Supply</Link>
    <Link href={`/market?popmode=BORROW`} className={`rounded-lg border text-white/50 border-white/50 py-1.5 px-3`}>Borrow</Link>
    </div>
    <Link href={`/market/details/${asset}`} className={` w-[50%] mx-auto col-span-2 rounded-lg border text-white border-white py-1.5 `}>Details</Link>
   
  </div>
  )
}

export default PoolRows 