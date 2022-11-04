import React from 'react'

function Assets(props) {
  return (
    <div>
    <h4>AssetName: {props.number}</h4>
    <h4>Serial.No: </h4>
    <h4>Owner: </h4>
    <h4>CreatedDate: </h4>
    <h4>Status: </h4>
    <button className='delete'>X</button>
    <button className='edit'>Edit</button>   
   </div>
  )
}

export default Assets