import React from 'react'
import Click2 from './Click2'

const Product = ({val,mover,count}) => {
  return (
    <div className="w-full py-10 text-white bg-zinc-900">
      <div onMouseEnter={()=>{mover(count)}}
        className="max-w-screen-xl mx-auto flex items-center mr-20 py-10
         justify-between"
      >
        <h1 className="text-2xl ml-20 font-bold">{val.title}</h1>
        <div className="w-1/3">
          <p className="mt-10 mb-5">{val.discription}.</p>
          <div className='flex items-center gap-8'>
            {val.live && <Click2 />}
            {val.case && <Click2 title=" Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
