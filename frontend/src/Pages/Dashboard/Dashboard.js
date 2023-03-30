import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container } from "react-bootstrap";
import community from "../../Images/Community.png";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h2 className="Dashboard__title">Hi there! Welcome to your FoodLicious</h2>
      <p className="Dashboard__message">
        This is where you can manage your account and view your activity.
      </p>
    </div>
  );
};

export default Dashboard;
