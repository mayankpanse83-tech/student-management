import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Employee Management System</h1>
        <p>
          Manage employees, departments, salaries and attendance with an easy
          and modern dashboard.
        </p>

        <button className="btn">Get Started</button>
      </div>

      <div className="cards">
        <div className="card">
          <h2>👨‍💼 Employees</h2>
          <p>Manage employee details quickly and easily.</p>
        </div>

        <div className="card">
          <h2>🏢 Departments</h2>
          <p>Create and manage different departments.</p>
        </div>

        <div className="card">
          <h2>💰 Salary</h2>
          <p>Track salary records and monthly payments.</p>
        </div>

        <div className="card">
          <h2>📅 Attendance</h2>
          <p>Monitor employee attendance efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;