import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';
import axios from 'axios';
import './Log.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Signup = () => {
  const navigate = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    address: '',
    gender: 'male', // Default gender
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9999/api/c3/user/register', formData);
      navigate('/login'); // Redirect on success
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.response.data.error); // Show the error message to the user
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
