import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Click2 = ({title="Get started"}) => {
  return (
    <div>
      <div
        className=" w-36 px-3 py-2 bg-zinc-200 text-black 
    rounded-full  mt-1 flex items-center gap-5"
      >
        <span className="font-medium text-sm">{title}</span>
        <FaLongArrowAltRight />
      </div>
    </div>
  );
}

export default Click2
