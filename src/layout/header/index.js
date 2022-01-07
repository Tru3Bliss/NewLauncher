import React from 'react'
import Navbar from '../navbar'

const Header = (props) =>{
  const{openLang, openPanel, openSide, setOpenSlide} = props
  return <Navbar openLang={openLang} openPanel={openPanel} openSide={openSide} setOpenSlide={setOpenSlide} />
}

export default Header