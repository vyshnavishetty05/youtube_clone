import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
        <h1>This is loading.........</h1>
        {Array(50).fill("").map((e, index)=>(<div key={index} className="bg-gray-200 w-48 h-[289px] m-5"></div>))};
    </div>
  )
}

export default Shimmer;