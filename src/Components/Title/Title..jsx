import React from 'react'

const Title = ({title,desc}) => {
  return (
    <div>
      <div className="flex flex-col pb-10 ">
        <h1 className="text-3xl text-gray-400 font-semibold capitalize ">
         {title}
        </h1>
        <h2 className="text-6xl font-bold text-red-500">{desc}</h2>
      </div>
    </div>
  );
}

export default Title
