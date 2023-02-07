import React, { useContext } from "react";
import "./signin.css";

import { LoginContext } from "../components/contexthook";

export const Signin = () => {
  const { setLoginName, setLoginPassword, login } = useContext(LoginContext);

  return (
    <div className="signin-page">
      <div className="register-container">
        <div className="signin-title">
          <p>Login account</p>
        </div>
        <form>
          <div className="form-input">
            <p>Email</p>
            <input
              type="text"
              onChange={(e) => {
                setLoginName(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-input">
            <p>Password</p>
            <input
              type="text"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={login}>Sign in</button>
        </form>
        <div className="already">
          <p>forgotten password</p>
          <a href="./recoverpassword">Sign in</a>
        </div>
        <p></p>
      </div>
    </div>
  );
};
export default Signin;
