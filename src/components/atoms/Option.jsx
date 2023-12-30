import React from 'react'
import "./Option.css"

const Option = ({index=0,OptionId,Value="Unknown",setOption}) => {
  return (
    <div className="Option" onClick={()=>setOption(OptionId)}>
      <div className='OptionIndex'>{index+1}</div>
      <div className='OptionValue'>{Value}</div> 
    </div>
  )
}

export default Option