import React from 'react'

export const StandardButton = (props) =>{
  const {children, className, disabled, onClick, type} = props
  return(
    <button type={type} className={`${className} rounded-sm ${disabled?"bg-app-yellow-light text-gray-300":"bg-app-primary text-white"} px-2.5`} disabled={disabled && true} onClick={onClick}>{children}</button>
  )
}

StandardButton.defaultProps={
  className:"h-max py-1"
}


export const DefaultButton = (props) =>{
  const {children, className, disabled, onClick, type} = props
  return(
    <button type={type} className={`${className} rounded-md ${disabled?"bg-app-yellow-light text-gray-300":"bg-white text-black"} py-1 px-2.5 h-max`} disabled={disabled && true} onClick={onClick}>{children}</button>
  )
}

