import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const link = [
    { id: 1, title: "Home", links: "home" },
    { id: 2, title: "Features", links: "features" },
    { id: 3, title: "Projects", links: "Projects" },
    { id: 4, title: "Testimonial", links: "Testimonial" },
    { id: 5, title: "Resume", links: "Resume" },
    { id: 6, title: "Contact", links: "Contact" },
  ];
  return (
    <div
      className=" text-white  w-full sticky top-0 z-50 bg-[#1A2130]  h-24 flex justify-between items-center
     border-b-[1px] border-gray-950  "
    >
      <div className="text-4xl font-bold cursor-pointer leading-none">
        <h1>DEV.</h1>
      </div>
      <div className="h-20">
        <ul className="flex items-center h-20 gap-10 text-black font-semibold  ">
          {link.map(({ id, title, links }) => (
            <li
              className="text-base font-normal text-gray-300 hover:text-red-400 cursor-pointer duration-200 leading-none tracking-wide"
              key={id}
            >
              <Link
                activeClass="active"
                to={links}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
