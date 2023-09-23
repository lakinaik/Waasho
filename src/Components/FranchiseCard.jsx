import React from "react";

const FranchiseCard = ({no, text}) => {
  return (
    <div className="flex gap-2 items-start shadow-lg p-6 rounded-sm hover:scale-105 duration-300">
      <div className="text-2xl border flex justify-center items-center w-[20px] h-[20px] rounded-full p-6">
      <span>{no}</span>
      </div>
      <div>
        <p className="text-lg font-semibold text-black">{text}</p>
      </div>
    </div>
  );
};

export default FranchiseCard;
