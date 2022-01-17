import React from "react";

export const H1 = (props) =>{
  const {children, className} = props
  return(
    <h1 className={`${className} text-3xl md:text-4xl xl:text-6xl md:leading-xl`}>{children}</h1>
  )
}

H1.defaultProps = {
  className:"text-center"
}


export const H2 = (props) =>{
  const {children, className} = props
  return(
    <h1 className={`${className} text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-7`}>{children}</h1>
  )
}

H2.defaultProps = {
  className:"text-left"
}


export const Title = (props) =>{
  const {children, className} = props
  return(
    <h1 className={`${className}  text-3xl md:text-4xl xl:text-6xl`}>{children}</h1>
  )
}

Title.defaultProps = {
  className:"text-center"
}