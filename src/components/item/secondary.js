import React from 'react';
import { DefaultButton } from '../button';
import "./item.scss"

const SecondaryItem = (props) =>{
  const {className, item, mask} = props
  return(
    <div className='sec-item relative rounded-xl text-white min-h-sm flex' style={{backgroundImage:`url(${item.img})`}}>
      <div className={`px-4 bg-gradient-to-r from-app-${mask} rounded-lg py-4 flex flex-1`}>
        <div className='flex flex-col h-full justify-center '>
          <p className='text-sm xl:text-xl font-bold'>{item.name}</p>
          <p className='mt-2 text-xs xl:text-lg'>{item.description}</p>
          <DefaultButton className="w-max mt-3 font-semibold px-2 py-1 text-xs">View 5 Listing</DefaultButton>
        </div>
      </div>
      <div className='from-app-primary-100 from-app-yellow-700 from-app-green-dark from-app-blue from-app-red'></div>
    </div>
  )
}

export default SecondaryItem