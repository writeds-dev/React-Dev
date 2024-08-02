import React from "react";
import Title from "../Title/Title.";
import Card from "./Card";
import { IoIosApps } from "react-icons/io";
import { VscAzureDevops } from "react-icons/vsc";
import { CiDesktop } from "react-icons/ci";
import { FaCircleArrowRight } from "react-icons/fa6";

const Features = () => {
  return (
    <section id="features" className="w-full h-[600px] py-20 ">
      <Title title="Features" desc="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Devolpment"
          icon2={<FaCircleArrowRight />}
          desc="The languages of the web: HTML, CSS, JavaScript, and SQL. This path is great for budding front-end or back-end!

         Includes JavaScript, Node.JS, SQL, Express.JS, React, Tsx, and more"
          icon={<IoIosApps />}
        />
        <Card
          title="Desgining"
          icon2={<FaCircleArrowRight />}
          desc="Behind every innovative modern technology that makes life easier for users worldwide are user interface (UI) designers, whose smart decisions make technology more accessible, engaging, and intuitive"
          icon={<CiDesktop className="text-[#FF8225]" />}
        />
        <Card
          className="pb-10"
          title="Devops"
          icon2={<FaCircleArrowRight />}
          desc="DevOps combines development (Dev) and operations (Ops) to increase the efficiency, speed, and security of software development and delivery compared to traditional processes. A more nimble software development lifecycle."
          icon={<VscAzureDevops className="text-[#6EACDA] " />}
        />
      </div>
    </section>
  );
};

export default Features;
