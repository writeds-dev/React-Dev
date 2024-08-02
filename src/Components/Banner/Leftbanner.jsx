import React from "react";
import { useTypewriter, cursor, Cursor } from "react-simple-typewriter";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaStackOverflow } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Leftbanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", " Devops.", "Ui Ux Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  const [one] = useTypewriter({
    words: ["नमस्ते 🙏"],
    typeSpeed: "100",
    delaySpeed: 5000,
    deleteSpeed: 20,
  });
  return (
    <div className="w-1/2 py-24 flex flex-col gap-10 ">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-2xl font-extrabold text-[#27374D]">{one} </h2>
        <h1 className="text-3xl font-bold ">
          Hi,I'm{" "}
          <span className="text-5xl text-green-100">Devanshu Sharma</span>
        </h1>
        <h2 className="text-4xl font-bold text-[#FF8F00]">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="font-semi text-white ">
          I'm having the keen interest with programming language Java.
          Experience with database development with SQL. Knowledge in software
          patterns and practices, experience of the full software lifecycle.
          Strong attention to details having detailed information in the git
          version control system.
        </p>
      </div>
      <div className="flex gap-6 justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#9EC8B9] uppercase mb-2 ml-1">
            Find me in
          </h2>
          <div className="gap-2 flex">
            <span className="bannerIcon">
              <TiSocialLinkedin />
            </span>
            <span className="bannerIcon">
              <FaStackOverflow />
            </span>
            <span className="bannerIcon">
              <GrGithub />
            </span>
          </div>
        </div>
        <div>
          <div className="">
            <h2 className="text-2xl font-bold text-[#9EC8B9] uppercase mb-2 ml-1">
              Best in
            </h2>
            <div className="gap-2 flex">
              <span className="bannerIcon  hover:text-yellow-400">
                <IoLogoJavascript />
              </span>
              <span className="bannerIcon">
                <GrReactjs />
              </span>
              <span className="bannerIcon">
                <SiTypescript />
              </span>
              <span className="bannerIcon  hover:text-gray-500">
                <SiPostgresql />
              </span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Leftbanner;
