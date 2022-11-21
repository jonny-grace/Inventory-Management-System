import React from "react";
import {
  ACTIVATE_USER,
  ADD_USER,
  DEACTIVATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../../Actions";

export function userReducer(state, { type, payload }) {
  switch (type) {
    case ACTIVATE_USER:
      const ActivateUser = state.map((state) => {
        if (state.id == payload) {
          
          return { ...state, isActive: true };
        }
        return state;
      });
      return ActivateUser;
    case DEACTIVATE_USER:
      const DeactivateUser = state.map((state) => {
        if (state.id == payload) {
          
          return { ...state, isActive: false };
        }
        return state;
      });
      return DeactivateUser;
    case ADD_USER:
      if(payload.fullName=='' || payload.email==''||payload.phone==''||payload.join_day==''||payload.password===''){
     
      }else{
        
        return [...state, payload];}
      

    case DELETE_USER:
      const newState = state.filter((user) => user.id !== payload);

      return [...newState];

    case UPDATE_USER:
      const delete_payload = state.filter((user) => user.id !== payload.id);

      return [payload, ...delete_payload];
      
      return state;
  }
}

export default userReducer;
