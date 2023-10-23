import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";

/* Componenets */
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import UserProvider from "./provider/UserProvider";
import RecipeProvider from "./provider/RecipeProvider";
import Recipe from "./components/main/Recipe";
import PrivateRoutes from "./utils/PrivateRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Wrap your application with context providers */}
      <UserProvider>
        <RecipeProvider>
          <Navbar />
          <Routes>
            {/* Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Unprotect Routes */}
            <Route path="/" exact element={<Recipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

          <Footer />
        </RecipeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
