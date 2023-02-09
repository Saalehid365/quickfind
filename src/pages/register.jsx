import React, { useState } from "react";
import "./register.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../components/contexthook";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signin, createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/library");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-title">
          <p>Register Account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <p>userName</p>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
            ></input>
          </div>

          <div className="form-input">
            <p>Email</p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            ></input>
          </div>
          <div className="form-input password">
            <p>Password</p>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
            ></input>
          </div>
          <Button variant="contained" onClick={handleSubmit}>
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

export default RegisterPage;
