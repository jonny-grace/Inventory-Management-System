import { ADD_ASSET, DELETE_ASSET, UPDATE_ASSET } from "../../Actions";

export function reducer(state, { type, payload }) {
  switch (type) {
    case ADD_ASSET:
      if (
        payload.asset_name === "" ||
        payload.asset_serial_number === "" ||
        payload.asset_decsription === "" ||
        payload.asset_owner === "" ||
        payload.creation_date === "" ||
        payload.status === ""
      ) {
        alert("please fill all required filleds");
      } else {
        alert("successfully added");
        return [...state, payload];
      }
      break;
    case DELETE_ASSET:
      const newState = state.filter((asset) => asset.id !== payload);
      console.log(newState);

      return [...newState];
     
    case UPDATE_ASSET:
      const delete_payload = state.filter((asset) => asset.id !== payload.id);

      return [payload, ...delete_payload];
    default:
      return state;
  }
}
