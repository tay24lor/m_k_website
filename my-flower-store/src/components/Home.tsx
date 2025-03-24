import React from 'react';
import '../styles/Home.css'; // Assuming you will create a CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the Flower Resin Store</h1>
        <p className="hero-subtitle">
          Discover timeless beauty with our exquisite collection of flowers preserved in resin.
        </p>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;