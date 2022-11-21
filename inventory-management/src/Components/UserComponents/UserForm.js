import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "../Input";
import Button from "../Button";
import { AssetContext } from "../../App";
import { ADD_USER, UPDATE_USER } from "../../Actions";
import arrow from '../arrow.png'

function UserForm({initial}) {
 
  const assetContext = useContext(AssetContext);
  const dispatch = assetContext.userDispatch; 
  const isUpdate= assetContext.userUpdate
  const updateId = assetContext.toBeUpdated

  const setIsUpdate= assetContext.setUserUpdate
  const setIsAdd =assetContext.setIsAdd
  const setTobeUpdated=assetContext.setTobeUpdated

  const initialValue= isUpdate ? initial[0]:assetContext.initialUser
 
  const [userInput, setUserInput] = useState(initialValue);
  const user_id = uuid();

  const id= isUpdate? updateId: user_id.slice(0,3)
  const handleSubmit = () => {
    dispatch({ type: ADD_USER, payload: userInput });
    setUserInput({
      isActive: "false",
      fullName: "",
      email: "",
      phone: "",
      join_day: ""
    })
    setIsAdd(false)
  };

  const handleEdit=()=>{
    dispatch({type:UPDATE_USER,payload:userInput})
    setIsUpdate(false)
    setTobeUpdated('')
  }
  return (
    <>
    
    <div className="input-filed">
      <div>
        <label>FullName</label>
        <Input
          type={"text"}
          value={userInput.fullName}
          onChange={(e) => {
            setUserInput({ ...userInput, fullName: e.target.value, id: id });
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <Input
          type={"email"}
          value={userInput.email}
          onChange={(e) => {
            setUserInput({ ...userInput, email: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Phone</label>
        <Input
          type={"tel"}
          value={userInput.phone}
          onChange={(e) => {
            setUserInput({ ...userInput, phone: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <Input
          type={"password"}
          value={userInput.password}
          onChange={(e) => {
            setUserInput({ ...userInput, password: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Join_Date</label>
        <Input
          type={"date"}
          value={userInput.join_day}
          onChange={(e) => {
            setUserInput({ ...userInput, join_day: e.target.value});
          }}
        />
      </div>
      <div><Button onClick={()=>{setIsUpdate(false) 
      setIsAdd(false)}} name={<img className="arrow-img" alt={'arrow'}src={arrow}/>}/>
      {isUpdate ? (
        <Button onClick={handleEdit} name={"Update"} />
      ) : (
        <Button onClick={handleSubmit} name={"Add"} />
      )}</div>
      
    </div>
    </>
  );
}

export default UserForm;
