import React from 'react';

const Switch = (props) =>{
  const {select, setSelect, className, first, second} = props;

  return(
    <div className= {`bg-app-gray-20 rounded-md ${className} w-max p-1 md:p-2 flex gap-2 text-xs sm:text-sm`}>
      <button className={`${select ? "bg-white shadow-sm md:shadow-lg font-semibold text-app-black-100":"text-app-black-60"} sm:py-2 px-1 py-1 sm:px-3 rounded-sm`} onClick={()=>setSelect(!select)}>{first}</button>
      <button className={`${!select ? "bg-white shadow-sm md:shadow-lg font-semibold text-app-black-100":"text-app-black-60"} sm:py-2 px-1 py-1 sm:px-3 rounded-sm`} onClick={()=>setSelect(!select)}>{second}</button>
    </div>
  )
}

export default Switch