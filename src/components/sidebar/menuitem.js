import React from 'react';
import rightIcon from '../../assets/icons/ic_right.svg';
const MenuItem = (props) => {
  const { onClick, className, menu } = props

  return (
    <div className='justify-between items-center flex h-13 px-4 cursor-pointer' onClick={onClick}>
      <span>{menu.title}</span>
      <img src={rightIcon} alt='right' />
    </div>)
}

export default MenuItem