import React from "react";
import Leftbanner from "./Leftbanner";
import Lottie from "lottie-react";
import Anim from './Anim.json'

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-[650px] pt-10 flex "
    >
      <Leftbanner />
      <div className=" ml-20 pt-40 flex justify-center items-center">
        <div className=" mb-[25%] text-white">
         <Lottie animationData={Anim}
         loop:true
         />
        </div>
      </div>
    </section>
  );
};

export default Banner;
