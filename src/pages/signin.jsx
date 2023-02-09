import React, { useState } from "react";
import "./signin.css";
import { UserAuth } from "../components/contexthook";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signin } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signin(email, password);
      navigate("/library");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="signin-page">
      <div className="register-container">
        <div className="signin-title">
          <p>Login account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <p>Email</p>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-input">
            <p>Password</p>
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <button>Sign in</button>
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
