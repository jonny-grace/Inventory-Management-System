
import React from 'react'

function Incidents(props) {
  return (
    <div>
    <h4>Incident Title: {props.number}</h4>
    <h4>Assigned User: </h4>
    <h4>Created By: </h4>
    <h4>CreatedDate: </h4>
    
    <button className='delete'>X</button>
    <button className='edit'>Edit</button>   
   </div>
  )
}

export default Incidents