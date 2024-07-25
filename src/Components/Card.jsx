import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para, hover }) => {
  return (
    <motion.div whileHover={{padding:"20px"}}
     className={`bg-zinc-600   p-4 rounded-md hover:bg-purple-700 ${width}`}>
      <h1 className="font-semibold flex justify-between mr-2 text-white text-lg ">
        Up Next Projects
        <IoIosArrowRoundForward />
      </h1>
      <p className="mt-3 font-bold text-lg">Project & Case Study</p>
      <div className="mt-28 text-xl">
        {start && (
          <>
            <h1>Start a Project</h1>
            <button className="rounded-full px-3 text-sm py-2 mt-4 border-[1px] border-zinc-100">
              contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm mt-2 text-zinc-400">
           project will be shown in the project list
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
