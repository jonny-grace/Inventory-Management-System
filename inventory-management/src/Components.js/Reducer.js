import { ACTIVATE_USER } from "../Actions";

export function reducer(state,{type,payload}){
    switch(type){
        case ACTIVATE_USER:
            state.map((user) => {
                if (user.id == payload) {
                  return { ...user, isActive: true };
                }
                return user;
              })
                
                
               
    }
}