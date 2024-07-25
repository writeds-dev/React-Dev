import React from "react";
import { motion } from "framer-motion";

const Marques2 = ({ imagesurl }) => {
  return (
    <div className="w-full overflow-hidden ">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex  py-8 pr-40  gap-10 whitespace-nowrap "
      >
        {imagesurl.map((url) => (
          <img src={url} className="w-58 flex-shrink-0 " />
        ))}
        {imagesurl.map((url) => (
          <img src={url} className="w-48" />
        ))}
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap py-8 gap-10  overflow-hidden"
        >
          {imagesurl.map((url) => (
            <img src={url} className="w-58 flex-shrink-0 " />
          ))}
          {imagesurl.map((url) => (
            <img src={url} className="w-48" />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Marques2;
