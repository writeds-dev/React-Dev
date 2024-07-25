import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Work = () => {
  const [data, setData] = useState([
    {
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "41%",
      left: "50%",
      isActive: false,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "53%",
      left: "46%",
      isActive: false,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "23%",
      left: "50%",
      isActive: false,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "57%",
      left: "53%",
      isActive: false,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "51%",
      left: "53%",
      isActive: false,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "54%",
      left: "43%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    const showImages = (arr) => {
      setData((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 5:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4, 5]);
    }
  });

  return (
    <div className=" w-full">
      <div className=" relative max-w-screen-xl text-center  mx-auto">
        <h1 className="text-[20vw] leading-2 tracking-tighter font-semibold   select-none">
          Work
        </h1>
        <div className="w-full h-full top-0 absolute">
          {data.map((elem, index) =>
            elem.isActive ? (
              <img
                className="w-40 translate-x-[-50%] translate-y-[0%]  absolute rounded-lg"
                src={elem.image}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
