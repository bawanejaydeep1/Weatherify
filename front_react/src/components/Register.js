import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

import Loading from './Loading';
import Navbar from './Navbar';
import Footer from './Footer';

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState('');

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8000/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        setMessage(data.message);
 
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
        <div className="container1">
          <form onSubmit={handleFormSubmit}>
            <h1 className="form-title">Register</h1>
            <div className="main-user-info">
              <div className="user-input-box">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                  />
              </div>
              <div className="user-input-box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleFormChange}
                  required
                  />
              </div>
              <div className="user-input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  />
              </div>
              <div className="user-input-box">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleFormChange}
                  required
                  />
              </div>
              <div className="user-input-box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleFormChange}
                  required
                  />
              </div>
              <div className="user-input-box">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleFormChange}
                  required
                  />
              </div>
              <div className="form-register-btn">
                <input type="submit" value="Register" />
                <div className="login-link">
                  <p>
                    Already have an account? <Link to={"/login"}>Login</Link>
                  </p>
                </div>
              </div>
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>
        <Footer />
      </>
    );
}

export default Register;

