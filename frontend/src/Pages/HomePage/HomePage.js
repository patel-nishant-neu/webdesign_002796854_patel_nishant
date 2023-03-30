import React, {useState} from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import community from "../../Images/food.jpg";
import './HomePage.css';

const HomePage = () => {

  return (
    
    <div className="HomePage">
      {/* Hero Slider */}
      <MainScreen title="FoodLicious" />
      <div className="hero-container">
      <img
        src={community}
        alt="Hero Image"
        className="hero-image"
      />
      <h1 className="hero-heading">Welcome to FoodLicious</h1>
      <p className="hero-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        semper urna, eu volutpat arcu.
      </p>
      <button className="hero-button" ahref="../AboutPage/AboutPage.js">Learn more</button>
    </div>
    </div>
  );
};

export default HomePage;
