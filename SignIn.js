import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api';
import './SignInForm.css';

const SignInForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await api.post('/signin', userData);
      // Handle successful sign-in response
      console.log('Signin successful:', response.data);
      // Redirect to the dashboard after successful sign-in
      navigate('/dashboard/${user_id}');
      //<Link to="/dashboard/1"/>
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle sign-in error here
    }
  };

  const buttonStyle = {
    width: '300px',
    height: '30px',
    border: 'double',
    borderRadius: '3px',
    paddingLeft: '8px',
    color: 'darkblue',
    // Add other styles as needed
  };
  return (
    <div>
      {/* Your HTML structure */}
      <div className="split right">
        <div className="logo">
          <img src={require('./img/logo.png')} alt="Company Logo" />
          <h2>Sign In</h2>
        </div>
        <div className="signin">
          <form onSubmit={handleSignIn}>
            <label><b>Email</b></label>
            <br />
            <input
              type="Email"
              name="email"
              id="Mail"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br /><br />
            <label><b>Password</b></label>
            <br />
            <input
              type="Password"
              name="password"
              id="Pass"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br /><br />
            <input
              type="submit"
              name="log"
              id="log"
              value="Sign In"
              hx-trigger="click"
            />
            <br />
            <input
              type="checkbox"
              id="check"
              hx-get="/remember"
              hx-trigger="change"
            />
            <span>Remember me</span>
            <br /><br />
            <button type="button" style={buttonStyle} onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
          </form>
        </div>
      </div>
      <div className="split left">
        <div className="side">
          <img src={require('./img/side.png')} alt="Side Image" />
        </div>
        <div className="welcome">
          <p>Welcome to Vitals Monitoring Portal.</p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

