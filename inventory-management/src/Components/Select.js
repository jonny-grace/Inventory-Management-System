import React from 'react'

function Select({value,onChange,type}) {
  const owner_options=['','Grace','Bereket','Abel','Daniel','Biniam']
  const status_options=['','Purchased', 'Operational', 'Instore', 'Not_Operational', 'Retired']
  const options= type==='owners' ? owner_options : status_options
  return (
    
    <select
    value={value}
    onChange={onChange}
  >
      {options.map(option=>{
        
      return(<option key={option}>{option}</option>)
      })}
   
  </select>
  )
}

export default Select