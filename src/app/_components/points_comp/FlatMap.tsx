import React, { useMemo } from "react";

interface IFlatMap {
  rewardsData?: number[];
  colorData?: string[];
}
const FlatMap = ({
  rewardsData = [10, 30, 30, 15, 5],
  colorData = ["#3bff89ff", "#f3fa96ff", "#f29c3fff", "#ff3863ff", "#c768f2ff"],
}: IFlatMap) => {
  
  const totalSum: number = rewardsData.reduce((acc, curr) => acc + curr, 0);
  function calculatePercentages(numbers: number[], total: number): number[] {
    return numbers.map(
      (number: number) => +((number / total) * 100).toFixed(1)
    );
  }
  const percentVals = useMemo(() => {
    return  calculatePercentages(rewardsData, totalSum);
  }, [rewardsData, totalSum]);

  return <div className={`w-full  rounded-xl overflow-hidden flex `}>
      {percentVals[0] && percentVals.map((vals : number, idx : number)=>(
        <span key={idx} className={` h-3`} style={{width : `${vals}%` , backgroundColor : `${colorData[idx]}`}}> </span>
      ))}
  </div>;
};

export default FlatMap;
