import React, { useContext } from 'react'
import { AssetContext } from '../../App';
import AssetListItems from './AssetListItems'
import CreateAsset from './CreateAsset';

function ManageAssets() {
  const assetContext = useContext(AssetContext);
  const isAdd=assetContext.isAdd
  const setIsAdd =assetContext.setIsAdd
  return (
    <>
    <div className="container">
        <h1>Manage Assets</h1>
        {isAdd? <CreateAsset/> :<button className='add-user' onClick={()=>{setIsAdd(true)}}>AddAsset</button>}  
           <AssetListItems />
         
        </div> 
    </>
    
  )
}

export default ManageAssets