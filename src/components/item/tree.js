import React, {useState} from 'react';
import Expand from 'react-expand-animated';
import sortIcon from '../../assets/icons/ic_sort_mobile.svg';
import downIcon from '../../assets/icons/ic_down.svg';
import whiteDownIcon from '../../assets/icons/ic_down_white.svg';

const TreeCheck = (props) => {

  const { children, summary, className, subClassname, mode, autoclose, sort } = props
  const [expand, setExpand] = useState(false)

  return (
    <div className={`${className} px-4 w-full flex-col cursor-pointer flex ${mode === "dark" ? "text-app-black-100" : "text-white"}`}>
      <div className={`flex justify-between items-center w-full ${subClassname}`} onClick={() => { setExpand(!expand) }}>
        {sort && <img src={sortIcon} alt="sort" className='md:hidden' />}
        <div className='w-full'>{summary}</div>
        <p>{expand?"-":"+"}</p>
      </div>
      <Expand open={expand} >
        <div onClick={() => { autoclose && setExpand(false) }} className='pl-4'>
          {children}
        </div>
      </Expand>
    </div>
  )
}

TreeCheck.defaultProps = {
  mode: "dark",
  autoclose: false,
  sort: false
}

export default TreeCheck