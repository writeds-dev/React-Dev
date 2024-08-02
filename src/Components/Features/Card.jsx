import React from 'react'

const Card = ({title,desc,icon,icon2}) => {
  return (
    <div
      className="w-full h-80 py-5 items-center justify-center  bg-[#222831] hover:bg-gray-900 hover:translate-y-2 rounded-2xl :
  duration-200 "
    >
      <div className="flex flex-col ">
        <div>
          <span className="text-5xl text-white  "> {icon}</span>
        </div>
        <div className=" text-3xl font-bold flex gap-2  ml-6 text-[#677D6A] group  ">
          <span className="cursor-pointer ">{title}</span>
          <span className="text-2xl py-3 group-hover:rotate-90 duration-200 cursor-pointer">
            {icon2}
          </span>
        </div>
        <div className="text-1xl ml-2 text-[#ECFFE6]">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
}

export default Card
