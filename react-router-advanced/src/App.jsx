import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex gap-4">
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile/:userId/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
