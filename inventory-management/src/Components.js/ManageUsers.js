import React from 'react'
import UserListItem from './UserListItem';
function ManageUsers() {
  
  return (
    <>
      <div className="login-container">
        ManageUsers
          <button className='add-user'>AddUser</button>
           <UserListItem /> 
        </div> 
      
    </>
  );
}

export default ManageUsers;
