import React, { useState, useEffect } from 'react';
import api from '../../api';
import './DashboardForm.css'; // Import the CSS file where your styles are defined

const DashboardForm = () => {
  const [userData, setUserData] = useState({
    full_name: '',
    systole_bp: '',
    diastole_bp: '',
    sensor_temperature: '',
    sensor_spo2: '',
    sensor_glucose: '',
    sensor_heart: '',
    created_at: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/dashboard/{user_id}/'); // Fetch user data for user ID 1, modify as needed
        setUserData(response.data);
        console.log('Fetched user data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  fetchData();
  }, []);


  // const handleDashboard = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const userData = {
  //       full_name: formData.name,
  //       systole_bp: formData.systole_bp,
  //       diastole_bp: formData.diastole_bp,
  //       sensor_temperature: formData.sensor_temperature,
  //       sensor_spo2: formData.sensor_spo2,
  //       sensor_heart: formData.sensor_heart,
  //       sensor_glucose: formData.sensor_glucose,
  //       created_at: formData.created_at
  //     };

  //     const response = await api.post('/dashboard/1', userData);
  //     console.log('Dashboard successful:', response.data);
  //   } catch (error) {
  //     console.error('Error receiving:', error);
  //   }
  //};

  const bloodPressure = `${userData.systole_bp} / ${userData.diastole_bp}`;
  const bloodGlucose = userData.sensor_glucose;
  const temperature = userData.sensor_temperature;
  const spo2 = userData.sensor_spo2;
  const heart_rate = userData.sensor_heart;

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="icon"><ion-icon name="person-sharp"></ion-icon></span>
              <span className="title">Hello {userData.full_name}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><ion-icon name="home-sharp"></ion-icon></span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><ion-icon name="lock-closed-sharp"></ion-icon></span>
              <span className="title">Change Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><ion-icon name="log-out-sharp"></ion-icon></span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="topbar">
        <div className="toggle">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search Here" />
            <ion-icon name="search-circle-sharp"></ion-icon>
          </label>
        </div>
      </div>

      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">{bloodPressure}</div>
            <div className="cardName">Blood Pressure</div>
          </div>
          <div className="iconBox">
            <ion-icon name="pulse-sharp"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{bloodGlucose}</div>
            <div className="cardName">Blood Glucose</div>
          </div>
          <div className="iconBox">
            <ion-icon name="fitness-sharp"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{temperature}</div>
            <div className="cardName">Temperature</div>
          </div>
          <div className="iconBox">
            <ion-icon name="thermometer-sharp"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{spo2}</div>
            <div className="cardName">Oxygen Level</div>
          </div>
          <div className="iconBox">
            <ion-icon name="water-sharp"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{heart_rate}</div>
            <div className="cardName">Heart Rate</div>
          </div>
          <div className="iconBox">
            <ion-icon name="pulse-sharp"></ion-icon>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardForm;