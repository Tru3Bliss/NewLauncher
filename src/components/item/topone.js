import React from "react";

const TopOne = (props) => {
  const {data} = props
  return(
    <div className="relative text-white">
      <img src={data.img} className="w-full"/>
      <div className="absolute left-0 w-full top-0 h-full">
        <div className="justify-between flex flex-col h-full p-4">
          <div className="gap-2 flex">
            <img src={data.client.img} className="rounded-full w-8 h-8" alt="item-image"/>
            <p className="text-sm">{data.client.name}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p>{data.name}</p>
              <p>{data.address}</p>
            </div>
            <p className="opacity-60">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopOne