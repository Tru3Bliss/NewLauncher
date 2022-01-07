import React from 'react'
import useWindowSize from '../dimention'
import Logo from '../../assets/icons/logo.svg';
import closeIcon from '../../assets/icons/ic_close.svg'
import "./sidebar.css"
import { StandardButton } from '../button';
import { SideMenu } from './sidemenu';
import MenuItem from './menuitem';
import { useNavigate } from 'react-router-dom';
const Sidebar = (props) => {
  const { open, setOpen, openLang } = props
  const size = useWindowSize()
  const tiny = size.width < 376

  let navigate = useNavigate();

  return (
    <div id="mySidenav" className={`sidebar absolute pt-16 -right-96 top-0 min-h-screen bg-white shadow-xl divide-y divide-app-gray-100 flex flex-col  duration-500  ${tiny?"w-screen":"w-96"} ${open?"-translate-x-full":''}`}>
      <div className='px-4 h-16 flex justify-between w-full items-center fixed top-0'>
        <img src={Logo} alt='logo' />
        <button className="text-app-gray-600" onClick={() => setOpen(false)}>
          <img src={closeIcon} alt='close' />
        </button>
      </div>
      <div className="justify-between flex-col divide-y divide-app-gray-100 overflow-y-auto menu-container">
        {SideMenu.map((menu, idx) => (
          <MenuItem menu={menu} key={idx} onClick={()=>{navigate(menu.path)}}/>
        ))}
      </div>
      <div className='px-4 py-3'>
        <StandardButton className="w-full">
          <p>View All 154 Launches</p>
          <p className='text-xs opacity-80'>Listed & updated by verified sales teams</p>
        </StandardButton>
      </div>

    </div>
  )
}

export default Sidebar