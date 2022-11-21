import React, { useContext, useState } from "react";
import { DELETE_ASSET, UPDATE_ASSET } from "../Actions";
import { AssetContext } from "../App";
import Button from "./Button";

function UserAssetList({owner}) {
  const assetContext = useContext(AssetContext);
  const state = assetContext.state;
  const dispatch=assetContext.dispatch


  return (
    <div className="list-container">

      {
      
      state.map((asset) => {
        if(asset.asset_owner.toLowerCase()==owner){
          return (<div className="list-items" key={asset.id}>
          
          <div> Asset Name:{asset.asset_name}</div>
          <div>serial NUmber:{asset.asset_serial_number}</div>
          <div>Description:{asset.asset_decsription}</div>
          <div>Owner:{asset.asset_owner}</div>
          
          
          <div>Created_Date:{asset.creation_date}</div>
          <div>Status:{asset.asset_status}</div>
          <Button onClick={()=>{dispatch({type:DELETE_ASSET,payload:asset.id})}} name={'X'} />
          <Button onClick={()=>{dispatch({type:UPDATE_ASSET,payload:asset.id})}} name={'Edit'} />
        </div> )
        }else{
            console.log('no asset',asset.asset_owner)
        }
        
      })}
    </div>
  );
}

export default UserAssetList;
