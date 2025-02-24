import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Animeselection.css'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/anime');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: 'white' }}>Login</h1>
      <form onSubmit={handleLogin} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' ,width:'600px', backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/043/116/836/non_2x/illustration-of-boy-profile-anime-style-black-silhouette-isolated-on-white-background-free-vector.jpg')",backgroundSize: 'cover'}}>
        <div className="form-group">
          <label style={{color:'black'}}>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{color:'black'}}>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
      <p style={{color:'blue'}}className="mt-3 text-center">
        Don't have an account? <Link to="/signup" style={{ color:'red' }}>Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;