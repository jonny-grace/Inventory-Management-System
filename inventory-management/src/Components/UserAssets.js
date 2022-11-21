import React from "react";
import UserAssetList from "./UserAssetList";
function UserAssets() {
  return (
    <>
      <div className="container">
        <h1> Asigned Asset List</h1>
        <button className="add-user">add Asset</button>
        <UserAssetList owner={'biniam'}/>
        
      </div>
    </>
  );
}

export default UserAssets;
