import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";
function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center text-white justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
