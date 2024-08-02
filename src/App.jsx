import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner/Banner";
import Features from "./Components/Features/Features";
import LocomotiveScroll from "locomotive-scroll";


const App = () => {
   const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-auto  bg-[#1A2130] ">
      <div className="max-w-screen-2xl mx-auto px-16 ">
        <Navbar />
        <Banner />
        <Features />
      </div>
    </div>
  );
};

export default App;
