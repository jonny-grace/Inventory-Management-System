import "./App.css";
import { createContext, useEffect, useReducer, useState } from "react";
import Login from "./Components/Login";
import { reducer } from "./Components/Reducers/Reducer";
import ManageUsers from "./Components/UserComponents/ManageUsers";
import { adminInfo, userInfo, AssetData } from "./Components/Data/Data";
import ManageAssets from "./Components/AssetComponents/ManageAssets";
import CreateAsset from "./Components/AssetComponents/CreateAsset";
import AddUser from "./Components/UserComponents/AddUser";
import UserAssets from "./Components/UserAssets";
import UpdateAsset from "./Components/AssetComponents/UpdateAsset";

function AdminHome() {
  return (
    <div className="App">
        
        {/* <Login /> */}
        {/* <ManageUsers />
        <AddUser /> */}

        <ManageAssets/>
        {/* <CreateAsset /> */}
      {/* <UpdateAsset />         */}
      </div>
  )
}

export default AdminHome