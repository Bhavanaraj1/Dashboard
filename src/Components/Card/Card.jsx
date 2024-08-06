import React from 'react';
import './Card.css';

const Card = ({ icon, text, mainNumber, sortIcon,sortNumber,color }) => {
  return (

    <div className="card">
      <div className="card-left">
       <img src= {icon} style={{backgroundColor:color}}/>
        <p>{text}</p>
        <h2>{mainNumber}</h2>
      </div>
      <div className="card-right">
        <img src={sortIcon}/>
        <p>{sortNumber}</p>
        </div>
      </div>
  
  );
}

export default Card;
