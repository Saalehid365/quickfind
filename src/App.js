import "./App.css";
import ResponsiveAppBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import RegisterPage from "./pages/register";
import Signin from "./pages/signin";
import { AuthContextProvider } from "./components/contexthook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <ResponsiveAppBar />
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="library" element={<Library />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="signin" element={<Signin />} />
            </Routes>
          </AuthContextProvider>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
