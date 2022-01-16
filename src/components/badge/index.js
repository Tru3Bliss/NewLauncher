import React from 'react';
import roundedCloseIcon from '../../assets/icons/ic_rounded_close.svg';
import roundedDarkIcon from '../../assets/icons/ic_rounded_dark_close.svg';
import roundedPurpleIcon from '../../assets/icons/ic_rounded_purple_close.svg';

export const BadgeButton = (props) => {
  const { clear, count, className } = props
  const handleClear = (e) =>{
    e.stopPropagation();
    clear()
  }
  return (
    <div className={`rounded-full h-5.5 px-2 bg-app-primary-100 text-white flex items-center gap-1 ${className}`}>
      <span className='text-sm'>{count}</span>
      <div onClick={handleClear}>
        <img src={roundedCloseIcon} alt='close' />
      </div>
    </div>
  )
}

export const FilterBadge = (props) =>{
  const { children, className, remove, mode } = props
  const handleClear = (e) =>{
    e.stopPropagation();
    remove()
  }
  return (
    <div className={`rounded-full h-7 px-2 border  ${mode==="purple"?"text-app-primary-light border-app-primary-light bg-app-primary-60":"text-black border-app-gray-400"} bg-white flex items-center gap-1 ${className}`}>
      <span className='text-sm'>{children}</span>
      <div onClick={handleClear}>
        <img src={mode==="purple"?roundedPurpleIcon:roundedDarkIcon} alt='close' />
      </div>
    </div>
  )
}

export const UnitBadge = (props) =>{
  const {children, className} = props
  return (
    <div className={`${className} bg-app-gray-20 text-app-black-60 text-xs p-1`}>
      {children}
    </div>
  )
}

export const StatusBadge = (props) => {
  const {children, className} = props
  return (
    <div className={`${className} text-app-black-50 text-xxs px-2 items-center rounded-full border-app-gray-30 border h-5 justify-center flex`}>
      {children}
    </div>
  )
}