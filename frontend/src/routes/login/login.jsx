import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    // Client-side validation
    if (!username || !password) {
      setError("Please enter both username and password!");
      setIsLoading(false);
      return;
    }

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input 
            name="username" 
            required 
            minLength={3} 
            type="text" 
            placeholder="Username" 
          />
          <input 
            name="password" 
            required 
            minLength={6}
            type="password" 
            placeholder="Password" 
          />
          <button disabled={isLoading}>
            {isLoading ? "Signing in..." : "Login"}
          </button>
          {error && <span className="error">{error}</span>}
          <Link to="/register">Don't have an account? Sign up</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
