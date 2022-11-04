import React from 'react'
import { useState } from 'react'

function Users(props) {

    const [activated,setActivated] = useState(true)

    function userActivate(){
      
            activated?
            setActivated(false)
            
            :
            setActivated(true)

            
    }
  return (
    <div>
        <button className='user-activate-button' onClick={userActivate}>{activated ? <p>Activate</p>: <p>Deactivate</p>}
            </button>
    <h4>Name: {props.name}</h4>
    <h4>Email: </h4>
    <h4>Role: </h4>
    
    <button className='delete'>X</button>
    <button className='edit'>Edit</button>   
   </div>
  )
}

export default Users