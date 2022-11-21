import React, { useContext } from 'react'
import { AssetContext } from '../../App';
import UserForm from './UserForm';

function UpdateUser() {
    const assetContext = useContext(AssetContext);
  const state = assetContext.userState;
  const updateId = assetContext.toBeUpdated;
 

  const initial = state.filter((asset) => {
    if (asset.id === updateId) {
      return asset;
    }
  });

  return (
    <div>
      <UserForm initial={initial} />
    </div>
  );
}

export default UpdateUser