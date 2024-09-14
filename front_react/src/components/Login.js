import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';

import Loading from './Loading';
import Navbar from './Navbar';
import Footer from './Footer';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
      console.log(data.ok);

      if (data.ok) {
        global.ok=1
        navigate(`/`);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);
  
  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <div className="wrapper">
        <form onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="form-submit-btn">
            <input type="submit" value="Login" />
            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
