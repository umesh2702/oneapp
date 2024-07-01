import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Login = ({login, handleLogin }) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9999/api/c3/user/login', formData);
      localStorage.setItem('jwtToken', response.data.jwtToken);
      handleLogin();
      history.push('/');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.'); // Set error state for displaying alert
    }
  };

  return (
    <div> <Header login={login}/>
    <div className="auth-container">

      <div className="auth-card">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
