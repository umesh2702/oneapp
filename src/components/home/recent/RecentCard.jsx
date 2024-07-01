import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:9999/api/c3/ser/allservice");
        setServices(response.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <div className='content grid3 mtop'>
        {services.map((service, index) => {
          const { image, service: serviceName, addresses, name, amount, role } = service;
          const location = addresses.length > 0 ? addresses[0].address : "Location not provided";
          const defaultImage = "https://via.placeholder.com/150"; // Default image URL
          
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={image || defaultImage} alt={serviceName} />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: role === "service" ? "#25b5791a" : "#ff98001a", color: role === "service" ? "#25b579" : "#ff9800" }}>{role}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>${amount}</button> <label htmlFor=''>/hr</label>
                </div>
                <span>{serviceName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
