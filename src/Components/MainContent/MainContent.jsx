import React from 'react';
import './MainContent.css';  // Assuming you're using App.css for global styles
import Cards from '../Cards/Cards';
import Activity from '../Activity/Activity';
import Table from '../Table/Table';
import CardComponent from '../CardComponent/CardComponent';
import Menu from '../Menu/Menu';
import Updates from '../Updates/Updates';



const MainContent = () => {
  return (
    <div className="main-container">
       <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
        <div className="left-section">
         <Cards/>
          <div className="activity-bar">
            <h2>Activity</h2>
            <Activity/>
          </div>
           <div className="recent-orders">
          <h2>Recent Orders</h2>
          <Table/>
        </div>
        </div>
        <div className="right-section">
        <div className="right-card">
            <CardComponent/>
          </div>
          <div className="right-box">
            <Menu/>
          </div>
          <div className="customer-feedback">
            <h2>Customer Feedback</h2>
            <Updates/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
