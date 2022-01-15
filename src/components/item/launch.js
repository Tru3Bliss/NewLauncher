import React from 'react'

const LaunchItem = (props) => {
  const { className, launch } = props

  return (
    <div className='flex flex-col shadow-xl'>
      <img src={launch.img} alt='launch' />
      <div className='flex flex-col p-4 gap-3'>
        <p className='text-xl text-app-black-100 font-semibold'>{launch.title}</p>
        <p className='text-app-black-60 text-sm'>{launch.content}</p>
        <div className='flex items-center gap-3'>
          <img src={launch.developer.img} alt='developer' className='w-11 h-11 flex-shrink-0' />
          <p className='text-sm text-app-black-100'>{launch.developer.name}</p>
        </div>
      </div>
    </div>
  )
}


export default LaunchItem