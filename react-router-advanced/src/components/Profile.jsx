import React from "react";
import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { useAuth } from "./AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  const {userId}=useParams();
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Profile of {userId}</h1>

      <nav className="mb-4 flex gap-4">
        <Link to="/profile/details" className="text-blue-500">
          Profile Details
        </Link>
        <Link to="/profile/settings" className="text-blue-500">
          Profile Settings
        </Link>
        <button onClick={logout} className="ml-4 px-3 py-1 bg-red-500 text-white rounded">Logout</button>
      </nav>

      {/* Nested Routes */}
      <Routes>
        {/* Redirect /profile to /profile/details */}
        <Route index element={<Navigate to="details" />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
