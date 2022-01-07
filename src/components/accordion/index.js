import React, { useState } from 'react'
import Expand from 'react-expand-animated';
import upIcon from '../../assets/icons/ic_up.svg';
import downIcon from '../../assets/icons/ic_down.svg';

const Accordion = (props) => {
  const [expand, setExpand] = useState(false)
  const { children, summary }
  return (
    <div className=''>
      <div className='flex justify-between' onClick={()=>{setExpand(!expand)}}>
        <div>{summary}</div>
        <img src={expand?upIcon:downIcon} alt='expand'/>
      </div>
      <Expand open={this.state.open}>
        {children}
      </Expand>
    </div>
  )
}

export default Accordion