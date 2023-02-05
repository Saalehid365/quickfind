import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ResponsiveAppBar from "./components/navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import Register from "./pages/register";
import Signin from "./pages/signin";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="register" element={<Register />} />
            <Route path="signin" element={<Signin />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
