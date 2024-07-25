import React from 'react';
import Click from './Click';


const Navbar = () => {
  return (
    <div className=" max-w-screen-xl mx-auto border-co flex items-center
     font-serif py-5 border-b-2  border-zinc-400">
      <div className="flex justify-center ">
        <img
          className="ml-2 "
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex items-center gap-20 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-10 bg-zinc-800"></span>
            ) : (
              
              <a className="text-md text-white " href="#">
                {index === 1 ? (
                  <span className="inline-block mb-1 p-1  w-2 h-1 rounded-full bg-green-500"></span>
                ) : (
                  ""
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Click />
    </div>
  );
}

export default Navbar;
