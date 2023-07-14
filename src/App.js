import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route exact path="/profile/:username" element={<Profile />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;


//1:48:00