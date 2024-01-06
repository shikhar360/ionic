"use client";
// SliderComponent.js
import React, { useState } from "react";

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(+e.target.value);
  };

  const getColor = () => {
    if (sliderValue < 60) {
      return "bg-green-500";
    } else if (sliderValue < 90) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className={`h-1 rounded-full relative`}>
        <div
          className={`h-full flex z-20 ${getColor()} relative rounded-l-full`}
          style={{ width: `${sliderValue}%` }}
        ></div>
        <div className={`w-full absolute bg-graylite h-1 top-0 z-10 `}></div>
        <div
          className={`h-4 w-4 ${getColor()} rounded-full z-20 absolute -top-1.5 -translate-x-1/2 `}
          style={{ left: `${sliderValue}%` }}
        ></div>

        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
          className="absolute top-0  z-30 opacity-0  w-full h-full  bg-gradient-to-r from-green-500 to-rose-500 cursor-pointer"
        />
      </div>
      
    </div>
  );
};

export default SliderComponent;
