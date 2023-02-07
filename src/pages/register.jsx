import React, { useContext } from "react";
import "./register.css";
import Button from "@mui/material/Button";
import { auth } from "../components/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { LoginContext } from "../components/contexthook";

const Register = () => {
  const {
    setRegisterEmail,
    setRegisterPassword,
    setRegisterName,
    setRegisterUserName,
    registerEmail,
    registerPassword,
  } = useContext(LoginContext);
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {};
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-title">
          <p>Register Account</p>
        </div>
        <form>
          <div className="form-input">
            <p>Name</p>
            <input
              onChange={(e) => {
                setRegisterName(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div className="form-input">
            <p>User Name</p>
            <input
              onChange={(e) => {
                setRegisterUserName(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <div className="form-input">
            <p>Email</p>
            <input
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
              type="email"
            ></input>
          </div>
          <div className="form-input password">
            <p>Password</p>
            <input
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <Button variant="contained" onClick={register}>
            Create account
          </Button>
        </form>
        <div className="already">
          <p>Already have an account ?</p>
          <a href="./signin">Sign in</a>
        </div>
      </div>
    </div>
  );
};
export default Register;
