import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const role = formData.get("role"); // Add role extraction

    // Client-side validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      setIsLoading(false);
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters!");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      setIsLoading(false);
      return;
    }

    try {
      await apiRequest.post("/auth/register", {
        username,
        email,
        password,
        role, // Pass role
      });

      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ flex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '400px',
          padding: '0 32px'
        }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px', color: '#333' }}>Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username (min 3 characters)"
            required
            minLength={3}
            style={{
              padding: '20px',
              border: '1px solid #999',
              borderRadius: '6px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
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
            type="password"
            placeholder="Password (min 6 characters)"
            required
            minLength={6}
            style={{
              padding: '20px',
              border: '1px solid #999',
              borderRadius: '6px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            minLength={6}
            style={{
              padding: '20px',
              border: '1px solid #999',
              borderRadius: '6px',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <select
            name="role"
            style={{
              padding: '20px',
              border: '1px solid #999',
              borderRadius: '6px',
              fontSize: '16px',
              outline: 'none',
              backgroundColor: 'white'
            }}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="REALTOR">Realtor</option>
          </select>
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
            {isLoading ? "Creating Account..." : "Register"}
          </button>
          {error && <span style={{
            color: '#dc2626',
            backgroundColor: '#fef2f2',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #fecaca'
          }}>{error}</span>}
          {success && <span style={{
            color: '#16a34a',
            backgroundColor: '#f0fdf4',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #bbf7d0'
          }}>{success}</span>}
          <Link to="/login" style={{
            fontSize: '14px',
            color: '#666',
            borderBottom: '1px solid #666',
            width: 'max-content',
            textDecoration: 'none'
          }}>Already have an account? Sign in</Link>
        </form>
      </div>
      <div style={{
        flex: 2,
        backgroundColor: '#fcf5f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img src="/bg.png" alt="" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Register;
