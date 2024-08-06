import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
import total from "../../imgs/total.png"
import Delivered from "../../imgs/Delivered.png"
import Cancel from "../../imgs/Cancel.png"
import revenue from "../../imgs/revenue.png"
import SortUp from "../../imgs/SortUp.png"
import SortDown from "../../imgs/SortDown.png"

const cardData = [
  { icon:total , text: 'Total Orders', mainNumber: 75,sortIcon:SortUp ,sortNumber: "3%",color:'blue' },
  { icon:Delivered, text: 'Total Delivered', mainNumber: 70,sortIcon:SortDown, sortNumber: "3%",color:'green' },
  { icon:Cancel , text: 'Total Cancelled', mainNumber: '05',sortIcon:SortUp ,sortNumber: "3%",color:'pink' },
  { icon:revenue , text: 'Total Revenue', mainNumber: '$12k',sortIcon:SortDown, sortNumber: "3%",color:'grey'},
];


const Cards = () => {
  return (
    <div className = "cards-container">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          icon={card.icon}
          text={card.text}
          mainNumber={card.mainNumber}
          sortIcon={card.sortIcon}
          sortNumber={card.sortNumber}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default Cards;
