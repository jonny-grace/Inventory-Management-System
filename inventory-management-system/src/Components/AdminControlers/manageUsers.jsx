
import React from 'react'
import Users from './Users'

import {useNavigate} from 'react-router-dom'

function ManageUsers() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
      <h3>List of All Users</h3>
     <button className='add-button' onClick={()=>{navigate('/manageassests/createasset')}}>Add New User</button>
      </div>
     
     <div  className='assets box-border'>  
    <Users name={'user 1'}/>
    <Users name={'user 2'}/>
    <Users name={'user 3'}/>
    <Users name={'user 4'}/>
    <Users name={'user 5'}/>
     
     </div>
    </div>
  )
}

export default ManageUsers