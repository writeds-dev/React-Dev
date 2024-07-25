import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var Pro = [
    {
      title: "NewScope",
      discription: "This is pure website we have in the new industry",
      live: true,
      case: false,
    },
    {
      title: "Google",
      discription:
        "This is pure website we have in the new industry which makes thing well",
      live: true,
      case: true,
    },
    {
      title: "Newrate",
      discription:
        "This is pure website we have in the new industry minimize the things and entire new world can be achieved and change",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      discription:
        "This is pure website we have in the new industry Yahoo is a global media and tech company connecting people to their passions – from finance and commerce to gaming and news. For partners,",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 18);
  };

  return (
    <div className="mt-10 relative">
      {Pro.map((elem, index) => (
        <Product val={elem} mover={mover} count={index} />
      ))}
      <div className="w-full h-full pointer-events-none top-0 absolute  ">
        <motion.div
          intial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.83, 0, 0.17, 1], duration:.5 }}
          className="w-[28rem] h-[18rem] absolute left-[20%] mt-10  bg-slate-400 overflow-hidden "
        >
          <motion.div className="w-full h-full bg-slate-400"></motion.div>
          <motion.div className="w-full h-full bg-slate-800"></motion.div>
          <motion.div className="w-full h-full bg-slate-500"></motion.div>
          <motion.div className="w-full h-full bg-slate-600"></motion.div>
          <motion.div className="w-full h-full bg-slate-900"></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
