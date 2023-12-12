import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import './SignUpForm.css'; // Import the CSS file where your styles are defined

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        age: formData.age,
      };

      const response = await api.post('/signup', userData);
      // Handle successful signup response
      console.log('Signup successful:', response.data);
      // Redirect to the dashboard page after successful signup
      navigate('/dashboard/${user_id}');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error here
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
      <div className="split right">
        <div className="logo">
          <img src={require('./img/logo.png')} alt="Company Logo" />
          <h2>Sign Up</h2>
        </div>
        <div className="signup">
          <form onSubmit={handleSignup}>
            <label><b>Full Name</b></label>
            <br/>
            <input
              type="text"
              name="name"
              id="Uname"
              placeholder="Fullname"
              value={formData.name}
              onChange={handleInputChange}
            /><br /><br />

            <label><b>Email</b></label>
            <br/>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            /><br /><br />

            <label><b>Password</b></label>
            <br/>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            /><br /><br />

            <label><b>Gender   </b></label>
            <input
              type="gender"
              name="gender"
              id="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleInputChange}
            /><br /><br />

            <label><b>Age   </b></label>
            <input
              type="age"
              name="age"
              id="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
            /><br /><br />

            <input type="submit" name="log" id="log" value="Sign Up" hx-trigger="click" /><br />
            <input type="checkbox" id="check" hx-get="/remember" hx-trigger="change" />
            <span>Remember me</span><br /><br />
            <button type="button" style={buttonStyle} onClick={() => navigate('/signin')}>Already have an account? Sign In</button>
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

export default SignUpForm;
