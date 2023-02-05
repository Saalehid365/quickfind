import React from "react";
import "./signin.css";

export const Signin = () => {
  return (
    <div className="signin-page">
      <div className="register-container">
        <div className="signin-title">
          <p>Login account</p>
        </div>
        <form>
          <div className="form-input">
            <p>Username</p>
            <input type="text"></input>
          </div>
          <div className="form-input">
            <p>Password</p>
            <input type="text"></input>
          </div>
        </form>
        <div className="already">
          <p>forgotten password</p>
          <a href="./recoverpassword">Sign in</a>
        </div>
      </div>
    </div>
  );
};
export default Signin;
