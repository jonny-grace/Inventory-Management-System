import React, { useContext, useState } from "react";
import { ACTIVATE_USER } from "../Actions";
import { AssetContext } from "../App";

function UserListItem() {
  const userContext = useContext(AssetContext);
  const userInfo = userContext.userInfo;
  const activate = userContext.activate;
  const deactivate = userContext.deactivate;
const dispatch=userContext.dispatch

  return (
    <div className="list-container">
      {userInfo.map((user) => (
        <div className="list-items" key={user.id}>
          {!user.isActive ? (
            <button
              onClick={() => {
                 activate(user.id);
                //dispatch({type:ACTIVATE_USER,payload:user.id})
              }}
              className="activate"
            >
              Activate
            </button>
          ) : (
            <button
              onClick={() => {
                deactivate(user.id);
              }}
              className="activate"
            >
              Deactivate
            </button>
          )}
          <div> FullName:{user.fullName}</div>
          <div>Email:{user.email}</div>
          <div>phone:{user.phone}</div>
          <div>Joining at:{user.join_day}</div>
          <button>X</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default UserListItem;
