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
    <div style={{height: '100vh', display: 'flex'}}>
      <div style={{flex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px', 
          width: '100%', 
          maxWidth: '400px', 
          padding: '0 32px'
        }}>
          <h1 style={{fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px', color: '#333'}}>Welcome back</h1>
          <input 
            name="username" 
            required 
            minLength={3} 
            type="text" 
            placeholder="Username" 
            style={{
              padding: '20px', 
              border: '1px solid #999', 
              borderRadius: '6px', 
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <input 
            name="password" 
            required 
            minLength={6}
            type="password" 
            placeholder="Password" 
            style={{
              padding: '20px', 
              border: '1px solid #999', 
              borderRadius: '6px', 
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <button 
            disabled={isLoading}
            style={{
              padding: '20px', 
              borderRadius: '6px', 
              border: 'none', 
              backgroundColor: isLoading ? '#b3d9d9' : '#0d9488', 
              color: 'white', 
              fontWeight: 'bold', 
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
          {error && <span style={{
            color: '#dc2626', 
            backgroundColor: '#fef2f2', 
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid #fecaca'
          }}>{error}</span>}
          <Link to="/register" style={{
            fontSize: '14px', 
            color: '#666', 
            borderBottom: '1px solid #666', 
            width: 'max-content',
            textDecoration: 'none'
          }}>Don't have an account? Sign up</Link>
        </form>
      </div>
      <div style={{
        flex: 2, 
        backgroundColor: '#fcf5f3', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <img src="/bg.png" alt="" style={{width: '100%'}} />
      </div>
    </div>
  );
}

export default Login;
