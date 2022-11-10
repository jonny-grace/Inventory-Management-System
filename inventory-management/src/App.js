import "./App.css";
import Login from "./Components.js/Login";
import { createContext, useReducer, useState } from "react";
import ManageUsers from "./Components.js/ManageUsers";
import { adminInfo, userInfo } from "./Data";
import { reducer } from "./Components.js/Reducer";
export const AssetContext = createContext();

function App() {
  const [adminData, setAdminData] = useState(adminInfo);
  const [userData, setUserData] = useState(userInfo);
  const [state,dispatch]=useReducer(reducer,userData)

  function activate(user_id) {
    setUserData((current) =>
      current.map((user) => {
        if (user.id == user_id) {
          return { ...user, isActive: true };
        }
        return user;
      })
    );
  }
  function deactivate(user_id) {
    setUserData((current) =>
      current.map((user) => {
        if (user.id == user_id) {
          return { ...user, isActive: false };
        }
        return user;
      })
    );
  }
  return (
    <AssetContext.Provider
      value={{ userInfo: userData, activate, deactivate,dispatch }}
    >
      <div className="App">
        <header className="App-header">
          Welcome to Your Inventory Manamgement system
        </header>

        {/* <Login /> */}
        <ManageUsers />
      </div>
    </AssetContext.Provider>
  );
}

export default App;
