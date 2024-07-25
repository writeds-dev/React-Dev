import React from "react";

const Stripe2 = ({val}) => {
  return <div className="w-[17%] mt-18 px-2 py-3 border-t-2 border-b-2 p-8 border-r-2 flex justify-between items-center ">
    <img src={val.url} alt="" />
    <span className="font-bold text-black ">{val.number}</span>

    </div>;
};

export default Stripe2;
