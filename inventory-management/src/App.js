import "./App.css";
import { createContext, useReducer, useState } from "react";
import {Routes,Route} from 'react-router-dom'
import Login from "./Components/Login";
import { reducer } from "./Components/Reducers/Reducer";
// import ManageUsers from "./Components/UserComponents/ManageUsers";
import {  userInfo, AssetData } from "./Components/Data/Data";
// import ManageAssets from "./Components/AssetComponents/ManageAssets";
// import CreateAsset from "./Components/AssetComponents/CreateAsset";
import userReducer from "./Components/Reducers/userReducer";
// import AddUser from "./Components/UserComponents/AddUser";
import AdminHome from "./AdminHome";
import ManageUsers from "./Components/UserComponents/ManageUsers";
import ManageAssets from "./Components/AssetComponents/ManageAssets";
import UserHome from "./UserHome";

export const AssetContext = createContext();

function App() {
  let initialAsset = {
    id: "",
    asset_name: "",
    asset_serial_number: "",
    asset_decsription: "",
    asset_owner: "",
    creation_date: "",
    asset_status: "",
  };
  let initialUser=
    {
      id: "",
      isActive: "false",
      password:'',
      fullName: "",
      email: "",
      phone: "",
      join_day: "",
    }
  

  let [toBeUpdated, setTobeUpdated] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [userUpdate,setUserUpdate]=useState(false)
  const [isAdd, setIsAdd] = useState(false);
  const [state, dispatch] = useReducer(reducer, AssetData);
  const [userState, userDispatch] = useReducer(userReducer, userInfo);
  const value = {
    isAdd,
    setIsAdd,
    userUpdate,
    setUserUpdate,
    isUpdate,
    setIsUpdate,
    toBeUpdated,
    setTobeUpdated,
    initialAsset,
    userState,
    state,
    dispatch,
    userDispatch,
    initialUser
  };
  return (
    <div className="App">
    <header className="App-header">
      Welcome to Your Inventory Management system Admin
      
    </header>
<AssetContext.Provider value={value}>
 
 
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='adminhome' element={<AdminHome /> }/>
        <Route path='manageasset' element={<ManageAssets/>}/>
        <Route path="userhome" element={<UserHome />}/>
      </Routes>
      {/* <AdminHome /> */}
      {/* <UserHome /> */}
    </AssetContext.Provider>
    </div>
    
  );
}

export default App;
