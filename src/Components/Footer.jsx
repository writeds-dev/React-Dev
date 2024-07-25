import React from 'react'

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20  text-white  flex gap-4">
        <div className="basis-1/2 ml-28 text-[7rem] font-semibold leading-none tracking-tight">
          refokus.
        </div>
        <div className="basis=1/2 ,mt-5 flex gap-1">
          <div className=" basis-1/3  ">
            <h3>Socials</h3>
            {["Instagram", "Twitter(x?)", "Linkedin"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 ">{item}</a>
            ))}
          </div>
          <div className=" basis-1/3 gap-4">
            <h3>SiteMap</h3>
            {["Home", "Work", "carrier"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 ">{item}</a>
            ))}
          </div>
          <div className="text-zinc-500  mt-7 flex-col">
            <h3>
              refokus is digital priosring agency to devolpe the things on top
              level design and empowerd by the digital oceans
            </h3>
            <div>
              <img
                className="mt-5"
                src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className=' flex gap-10 justify-start text-sm text-zinc-500 px-10 ml-10'>
        {["privacy policies", "cookies policies", "Terms", "Webflow Agency"].map(
          (item, index) => (
            <a>{item}</a>
          )
        )}
      </div>
    </div>
  );
}

export default Footer
