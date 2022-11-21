import React, { useContext } from "react";
import { DELETE_ASSET } from "../../Actions";
import { AssetContext } from "../../App";
import Button from "../Button";
import UpdateAsset from "./UpdateAsset";


function AssetListItems() {
  
  const assetContext = useContext(AssetContext);
  
  const setUpdateId=assetContext.setTobeUpdated
  const state = assetContext.state;
  const isUpdate= assetContext.isUpdate
  const setIsUpdate=assetContext.setIsUpdate

  const dispatch=assetContext.dispatch
const handleEditButton=(id)=>{
  console.log(id)
  
   setUpdateId(id)
   setIsUpdate(true)
  
}

  return (
    <>
    {isUpdate? <UpdateAsset/> :null}
    
    <div className="list-container">
      {state.map((asset) => (
        <div className="list-items" key={asset.id}>
          
          <div> ID:{asset.id}</div>
          <div> Asset Name:{asset.asset_name}</div>
          <div>serial NUmber:{asset.asset_serial_number}</div>
          <div>Description:{asset.asset_decsription}</div>
          <div>Owner:{asset.asset_owner}</div>
          
          
          <div>Created_Date:{asset.creation_date}</div>
          <div>Status:{asset.asset_status}</div>
          <Button onClick={()=>{dispatch({type:DELETE_ASSET,payload:asset.id})}} name={'X'} />
          <Button onClick={()=>{handleEditButton(asset.id)}} name={'Edit'} />
        </div>
      ))}
    </div>
   
    </>
  );
}

export default AssetListItems;
