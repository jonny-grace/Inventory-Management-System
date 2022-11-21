import React, { useContext } from "react";
import { AssetContext } from "../../App";
import AddUser from "./AddUser";
import UserListItem from "./UserListItem";
function ManageUsers() {
  const assetContext = useContext(AssetContext);
  const isAdd=assetContext.isAdd
  const setIsAdd =assetContext.setIsAdd
  return (
    <>
      <div className="container">
        <h1> ManageUsers</h1>
        {isAdd? <AddUser/> :<button className='add-user' onClick={()=>{setIsAdd(true)}}>Add User</button>}  
        
        <UserListItem />
      </div>
    </>
  );
}

export default ManageUsers;
