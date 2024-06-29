
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        
            
      <header className="dashboard-header">
        <div className="d-flex justify-content-between align-items-center p-3">
          <img src="./home.png" alt="Home" className="header-icon" />
          <Link to="/login" className="btn btn-info btn-lg ms-auto" >Login</Link> 
          
          
          <div className="header-icons">
            <img src="./languages.png" alt="Icon1" className="header-icon" />
            <img src="./profile.png" alt="Icon2" className="header-icon" />
          </div>
        </div>
        <div className="search-bar-container d-flex justify-content-center align-items-center">
          <input type="text" className="form-control" placeholder="Search" />
          <img src="search.png" alt="Bell" className="header-icon" />
          <button className="btn btn-light"><img src="notification.png" alt="Bell" className="header-icon" /></button>
        </div>
      </header>

      <section className="grievance-section text-center my-3">
        <div className="d-flex justify-content-around">
          <button className="grievance-button bg-lightgreen-custom">
            <h5>LODGED GRIEVANCE</h5>
            <h3>3</h3>
          </button>
          <button className="grievance-button bg-lightgreen-solved">
            <h5>GRIEVANCE SOLVED</h5>
            <h3>3</h3>
          </button>
          <button className="grievance-button bg-lightred-pending">
            <h5>GRIEVANCE PENDING</h5>
            <h3>2</h3>
          </button>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-alert" id="newGrievance">NEW GRIEVANCE</button>
          <button className="btn btn-outline-alert" id="trackGrievance">TRACK YOUR GRIEVANCE</button>
        </div>
      </section>

      <section id="track-section" className="track-section text-center my-3">
     
        <button className="btn btn-light btn-pink btn-rectangle">   <b>Track/Lodge your grievance</b><i className="fas fa-microphone"></i></button>
      </section>

      <section className="explore-section my-3">
  
  <div className="d-flex flex-wrap justify-content-around">
    <div className="explore-box">
      <button className="btn btn-light">REDRESSAL PROCESS</button>
    </div>
    <div className="explore-box">
      <button className="btn btn-light">Departments</button>
    </div>
    <div className="explore-box">
      <button className="btn btn-light">SUGGESTION</button>
    </div>
    <div className="explore-box">
      <button className="btn btn-light">FEEDBACKS</button>
    </div>
    <div className="explore-box">
      <button className="btn btn-light">TIME SHIFT</button>
    </div>
  </div>
</section>


<section className="popular-departments my-3">
  <h4 className="text-center">POPULAR DEPARTMENTS</h4>
  <div className="d-flex flex-wrap justify-content-around">
    <div className="department-button">
      <button className="department-icon">
        <img src="./hr.png" alt="HR" />
      </button>
      <h5 className="department-name">HUMAN RESOURCES</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./admin.png" alt="Admin" />
      </button>
      <h5 className="department-name">ADMIN</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./finance.png" alt="Finance" />
      </button>
      <h5 className="department-name">FINANCE DEPARTMENT</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./communication.png" alt="Communication" />
      </button>
      <h5 className="department-name">COMMUNICATION</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./it.png" alt="IT" />
      </button>
      <h5 className="department-name">IT DEPARTMENT</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./marketing.png" alt="Marketing" />
      </button>
      <h5 className="department-name">MARKETING & SALES</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./legal.png" alt="Legal" />
      </button>
      <h5 className="department-name">LEGAL DEPARTMENT</h5>
    </div>
    <div className="department-button">
      <button className="department-icon">
        <img src="./inventory.png" alt="Inventory" />
      </button>
      <h5 className="department-name">INVENTORY</h5>
    </div>
  </div>
</section>

    </div>
  );
};

export default Dashboard;




