import React from 'react'

const LaunchItem = (props) => {
  const { className, launch } = props

  return (
    <div className='px-4 w-full'>
      <div className='flex flex-col shadow-app-gray-30 shadow-[1px_2px_16px_rgb(0,0,0,0.14)] '>
        <img src={launch.img} alt='launch' />
        <div className='flex flex-col p-3 md:p-4 gap-3 flex-1'>
          <div className='flex flex-col gap-2 md:gap-3 flex-1'>
            <p className='text-lg md:text-xl text-app-black-100 font-semibold leading-5.5'>{launch.title}</p>
            <p className='text-app-black-60 text-sm leading-5'>{launch.content}</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={launch.developer.img} alt='developer' className='w-8 h-8 md:w-11 md:h-11 flex-shrink-0' />
            <p className='text-sm text-app-black-100'>{launch.developer.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LaunchItem