import React, { useContext } from "react";
import { AssetContext } from "../../App";
import AssetForm from "./AssetForm";

function UpdateAsset() {
  const assetContext = useContext(AssetContext);
  const state = assetContext.state;
  const updateId = assetContext.toBeUpdated;

  const initial = state.filter((asset) => {
    if (asset.id === updateId) {
      return asset;
    }
  });

  return (
    <div>
      <AssetForm initial={initial} />
    </div>
  );
}

export default UpdateAsset;
