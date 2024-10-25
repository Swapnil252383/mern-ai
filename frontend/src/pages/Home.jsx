import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-overlay">
        <h1>Welcome to Our College</h1>
        <p>Discover opportunities, learn, and grow with us.</p>
        <button className="home-button">Explore More</button>
      </div>
    </div>
  );
}

export default Home;
