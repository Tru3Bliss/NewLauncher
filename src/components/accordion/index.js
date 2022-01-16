import React, { useState } from 'react'
import Expand from 'react-expand-animated';
import upIcon from '../../assets/icons/ic_up.svg';
import downIcon from '../../assets/icons/ic_down.svg';
import whiteDownIcon from '../../assets/icons/ic_down_white.svg';

const Accordion = (props) => {

  const { children, summary, className, subClassname, mode, autoclose } = props
  const [expand, setExpand] = useState(false)
  return (
    <div className={`${className} px-4 items-center ${mode === "dark" ? "text-app-black-100" : "text-white"}`}>
      <div className={`flex justify-between items-center ${subClassname}`} onClick={() => { setExpand(!expand) }}>
        <div className='w-10/12'>{summary}</div>
        <img src={mode === "dark" ? downIcon : whiteDownIcon} alt='expand' className={`transform ${expand ? "rotate-180" : "rotate-0"} duration-300 flex-shrink-0`} />
      </div>
      <Expand open={expand} >
        <div onClick={() => { autoclose && setExpand(false) }}>
          {children}
        </div>
      </Expand>
    </div>
  )
}

Accordion.defaultProps = {
  mode: "dark",
  autoclose: false
}

export default Accordion