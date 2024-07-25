import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

const Click = () => {
  return (
    <div className=" w-36 px-3 py-2 bg-zinc-200 text-black 
    rounded-full ml-64 flex items-center justify-between">
      <span className="font-medium text-sm">Get Started</span>
      <CiLocationArrow1 />
    </div>
  );
}

export default Click
