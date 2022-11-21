import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AssetContext } from "../App";
import Select from "./Select";

function Login() {
  const [userInput, setUserInput] = useState({
    userType: "",
    userName: "",
    password: "",
  });
  let path = "adminhome";
  const loginContext = useContext(AssetContext);

  const handleLogin = () => {
    if (userInput.userType == "") {
      alert("please sellect your UserType");
    } else {
      //path = 'adminhome'
      !loginContext.isLoged && alert("Loged In ", userInput.userType);
    }
  };
  return (
    <>
      <div className="container">
        Log In To Your Account
        <div className="input-filed">
          <div>
            <label>UserType:</label>
            <br />
            <input
              type={"radio"}
              value={userInput.userType}
              name={userInput.userType}
              onChange={(e) => {
                e.preventDefault();
                setUserInput({
                  ...userInput,
                  userType: "admin",
                });
              }}
            />{" "}
            Admin
            <input
              type={"radio"}
              value={userInput.userType}
              name={userInput.userType}
              onChange={() => {
                setUserInput({
                  ...userInput,
                  userType: "user",
                });
              }}
            />{" "}
            User
          </div>

          <div>
            <label>Username:</label>
            <input type={"text"} />
          </div>
          <div>
            {" "}
            <label>Password:</label>
            <input type={"password"} />
          </div>

          <button onClick={handleLogin}>
            <Link to={'adminhome'}>Login</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
