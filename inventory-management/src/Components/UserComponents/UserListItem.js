import React, { useContext, useState } from "react";
import {
  ACTIVATE_USER,
  DEACTIVATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../../Actions";
import { AssetContext } from "../../App";
import UpdateAsset from "../AssetComponents/UpdateAsset";
import Button from "../Button";
import UpdateUser from "./UpdateUser";
function UserListItem() {
  const userContext = useContext(AssetContext);
  const userInfo = userContext.userState;

  const isUpdate = userContext.userUpdate;
  const setIsUpdate = userContext.setUserUpdate;
  const setUpdateId = userContext.setTobeUpdated;
  const dispatch = userContext.userDispatch;

  const handleEditButton = (id) => {
    setUpdateId(id);
    setIsUpdate(true);
  };
  return (
    <>
      {isUpdate ? <UpdateUser /> : null}
      <div className="list-container">
        {userInfo.map((user) => (
          <div className="list-items" key={user.id}>
            {!user.isActive ? (
              <Button
                onClick={() => {
                  dispatch({ type: ACTIVATE_USER, payload: user.id });
                }}
                className="activate"
                name="Activate"
              />
            ) : (
              <Button
                onClick={() => {
                  dispatch({ type: DEACTIVATE_USER, payload: user.id });
                }}
                className="activate"
                name=" Deactivate"
              />
            )}
            <div> FullName:{user.fullName}</div>
            <div>Email:{user.email}</div>
            <div>phone:{user.phone}</div>
            <div>Joining at:{user.join_day}</div>
            <Button
              onClick={() => {
                dispatch({ type: DELETE_USER, payload: user.id });
              }}
              name={"X"}
            />
            <Button
              onClick={() => {
                handleEditButton(user.id);
              }}
              name={"Edit"}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default UserListItem;
