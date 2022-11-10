import React, { useContext, useState } from "react";
import { AssetContext } from "../App";

function Login() {
  const [userInput, setUserInput] = useState({
    userType: "",
    userName: "",
    password: "",
  });
  const loginContext = useContext(AssetContext);
  console.log(loginContext.isLoged);
  console.log(loginContext.userName);
  console.log(loginContext.password);

  const handleLogin = () => {
    userInput.userType == ""
      ? alert("please sellect your UserType")
      : !loginContext.isLoged && console.log("Loged In ", userInput.userType);

  };
  return (
    <>
      <div className="login-container">
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

          <button onClick={handleLogin}>LogIn</button>
        </div>
      </div>
    </>
  );
}

export default Login;
