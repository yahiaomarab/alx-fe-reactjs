import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile"); // Redirect to profile after login
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Login Page</h1>
      <button 
        onClick={handleLogin} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
