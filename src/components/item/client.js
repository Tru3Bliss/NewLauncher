import React from 'react'
import { BASE_URL } from '../api'

const ClientItem = (props) => {
  const { className, client } = props
  return (<div className={`flex flex-col ${className} min-h-md justify-between w-full p-6 shadow-xl gap-4`}>
    <p className='text-app-black-60'>"{client.testimonial}"</p>
    <div className='flex gap-3 items-center'>
      <img src={BASE_URL + client.image_path} alt={client.image_alt} className='w-11 h-11 flex-shrink-0 rounded-full' />
      <div className='flex flex-col gap-1'>
        <p className='text-app-black-100 font-semibold'>{client.name}</p>
        <p className='text-sm text-app-black-60'>{client.designation}</p>
      </div>
    </div>
  </div>)
}

export default ClientItem