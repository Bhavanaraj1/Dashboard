
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SortUp from "../../imgs/SortUp.png"
import './CardComponent.css';

const CardComponent = () => {
  const percentage = 70; 

  return (
    <div className="card-contain">
      <div className="left-sect">
        <div className="text">Total Revenue</div>
        <div className="number">$6759.25</div>
        <div className="icon-with-number">
          <img src={SortUp}/>
          <p>3%</p>
        </div>
      </div>
      <div className="right-sec">
        <CircularProgressbar 
          value={percentage} 
          text={`${percentage}%`} 
          styles={buildStyles({
            textSize: '28px',
            pathColor: 'blue',
            textColor: 'white',
            trailColor: 'white',
          })}
        />
        <p>completed</p>
      </div>
    </div>
  );
};

export default CardComponent;

