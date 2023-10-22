import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";

/* Componenets */
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import Recipe from "./components/Recipe";
import UserProvider from "./provider/UserProvider";
import RecipeProvider from "./provider/RecipeProvider";

function App() {
  return (
    <BrowserRouter>
      {/* Wrap your application with context providers */}
      <UserProvider>
        <RecipeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Recipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </RecipeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
