
import React from 'react'; 
import BarGraph from "../BarGraph/BarGraph"; 
import "./Activity.css";
 
  
  const Activity = () => {
    return (
        
      <div className="bar-graph">
        <BarGraph/>
        <div className ="opt"><select>
        <option>weekly</option>
        <option>daily</option>
        <option>monthly</option>
        </select></div>
        
      </div>
    );
  };
  

export default Activity;
