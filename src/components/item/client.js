import React from 'react'
import { BASE_URL } from '../api'

const ClientItem = (props) => {
  const { className, client } = props
  return (<div className='px-4 w-full'>
    <div className={`flex flex-col ${className} min-h-md justify-between w-full p-4 shadow-[1px_6px_20px_rgb(0,0,0,0.17)] shadow-app-gray-30 gap-4 rounded-sm h-full`}>
      <p className='text-app-black-60 flex-1'>"{client.testimonial}"</p>
      <div className='flex gap-3 items-center'>
        <img src={BASE_URL + client.image_path} alt={client.image_alt} className='w-11 h-11 flex-shrink-0 rounded-full' />
        <div className='flex flex-col gap-1'>
          <p className='text-app-black-100 font-semibold'>{client.name}</p>
          <p className='text-sm text-app-black-60'>{client.designation}</p>
        </div>
      </div>
    </div>
  </div>)
}

export default ClientItem