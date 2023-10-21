import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import Recipe from "./components/Recipe";
import UserProvider from "./provider/UserProvider";
import RecipeProvider from "./provider/RecipeProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <RecipeProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Recipe />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </RecipeProvider>
        </UserProvider>

        {/*      <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
