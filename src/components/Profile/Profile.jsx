import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import profile from '../images/providers/profile.png';
import { FaRegEdit } from "react-icons/fa";
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';

const Profile = ({login}) => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          throw new Error('JWT token not found in localStorage');
        }

        const response = await axios.get('http://localhost:9999/api/c3/user/me', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        setUserData(response.data.user);
        setEditData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const jwtToken = localStorage.getItem('jwtToken');
      await axios.put('http://localhost:9999/api/c3/user/me/profileupdate', editData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
      setUserData(editData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header login={login}/>
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-card-left">
            <img 
              src={profile}
              alt="Avatar" 
              className="profile-avatar" 
            />
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                style={{ color: 'black' }}
              />
            ) : (
              <h1>{userData.name}</h1>
            )}
            <FaRegEdit fontSize={35} onClick={handleEditToggle} style={{ cursor: 'pointer' }} />
          </div>
          <div className="profile-card-body">
            <h6>Information</h6>
            <hr className="profile-hr" />
            <div className="profile-info">
              <div className="profile-info-item">
                <h6>Email</h6>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-muted">{userData.email}</p>
                )}
              </div>
              <div className="profile-info-item">
                <h6>Phone</h6>
                {isEditing ? (
                  <input
                    type="tel"
                    name="number"
                    value={editData.number}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-muted">{userData.number}</p>
                )}
              </div>
              <div className="profile-info-item">
                <h6>Address</h6>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editData.address}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-muted">{userData.address}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="profile-actions">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleEditToggle}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Profile;
