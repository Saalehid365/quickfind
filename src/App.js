import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./components/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ResponsiveAppBar from "./components/navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import Register from "./pages/register";
import Signin from "./pages/signin";
import { LoginContext } from "./components/contexthook";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/components/firebase-config";

function App() {
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginName,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
    console.log(user);
  };
  //user state keeps auth active onAuthStateChange this will keep
  //recognises users logged

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider
          value={{
            registerEmail,
            login,

            registerName,

            registerPassword,

            registerUserName,

            loginName,
            loginPassword,
            user,
          }}
        >
          <main>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="library" element={<Library />} />
              <Route path="register" element={<Register />} />
              <Route path="signin" element={<Signin />} />
            </Routes>
          </main>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
