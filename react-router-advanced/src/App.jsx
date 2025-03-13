import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // ✅ Import BlogPost
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex gap-4">
          <Link to="/profile/1">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/blog/1">Blog 1</Link> {/* ✅ Added Blog Links */}
          <Link to="/blog/2">Blog 2</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />

          {/* ✅ Protected Profile Route with Dynamic userId */}
          <Route
            path="/profile/:userId/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Added BlogPost Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
