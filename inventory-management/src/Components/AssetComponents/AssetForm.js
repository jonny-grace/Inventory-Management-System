import React, { useContext, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { v4 as uuid } from "uuid";
import Button from "../Button";
import { AssetContext } from "../../App";
import { ADD_ASSET, UPDATE_ASSET } from "../../Actions";
import arrow from '../arrow.png'
function AssetForm({initial}) {

  const assetContext=useContext(AssetContext)
  const isUpdate= assetContext.isUpdate
  const setIsUpdate= assetContext.setIsUpdate
  const updateId = assetContext.toBeUpdated
  const setTobeUpdated=assetContext.setTobeUpdated
  const setIsAdd =assetContext.setIsAdd

  const initialValue= isUpdate ? initial[0]:assetContext.initialAsset
  
  const [assetInput, setAssetInput] = useState(initialValue);


const dispatch=assetContext.dispatch
const asigned_id=uuid()
const id= isUpdate? updateId: asigned_id.slice(0,3)

const handleEdit=()=>{
  dispatch({type:UPDATE_ASSET,payload:assetInput})
  setIsUpdate(false)
  setTobeUpdated('')
  
  
}
  const handleSubmit = () => {   
    dispatch({type:ADD_ASSET,payload:assetInput})
    setAssetInput({
      asset_name: "",
      asset_serial_number: "",
      asset_decsription: "",
      asset_owner: "",
      creation_date: "",
      asset_status: "",
    })
    setIsAdd(false)
  };
  return (
    <>
   
    <div className="input-filed">

      <div>
        <label>Asset_Title:*</label>
        <Input
          type={'text'}
          value={assetInput.asset_name}
          onChange={(e) => {
            setAssetInput({ ...assetInput, asset_name: e.target.value,id:id });
          }}
        />
      </div>
      <div>
        <label>Serial Number:*</label>
        <Input
          type={'text'}
          value={assetInput.asset_serial_number}
          onChange={(e) => {
            setAssetInput({ ...assetInput, asset_serial_number: e.target.value });
          }}
        />
      </div>
      <div>
      <label>Description:*</label>
        <textarea value={assetInput.asset_decsription}
          onChange={(e) => {
            setAssetInput({ ...assetInput, asset_decsription: e.target.value});
          }}></textarea>
      </div>
      <div>
        <label>Asset Owner:*</label>
        <Select
          type={'owners'}
          value={assetInput.asset_owner}
          onChange={(e) => {
            setAssetInput({ ...assetInput, asset_owner: e.target.value });
          }}
        />
      </div>
      {!isUpdate? <div>
        
        <label>Creation_Date:*</label>
        <Input
          type={'date'}
          value={assetInput.creation_date}
          onChange={(e) => {
            setAssetInput({ ...assetInput, creation_date: e.target.value });
          }}
        />
        
      </div> :null}
      
      <div>
        <label>Status:*</label>
        <Select
          type={'status'}
          value={assetInput.asset_status}
          onChange={(e) => {
            setAssetInput({ ...assetInput, asset_status: e.target.value });
          }}
        />
      </div>
      <div>
      <Button onClick={()=>{setIsUpdate(false) 
      setIsAdd(false)}} name={<img className="arrow-img" alt={'arrow'}src={arrow}/>}/>
      {isUpdate ? (
        <Button onClick={handleEdit} name={"Update"} />
      ) : (
        <Button onClick={handleSubmit} name={"Add"} />
      )}
      </div>
    </div></>
  );
}

export default AssetForm;
