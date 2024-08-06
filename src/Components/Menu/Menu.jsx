import React from 'react';
import './Menu.css';
import burger from "../../imgs/burger.png"
import target from "../../imgs/target.png"
import cloche from "../../imgs/cloche.png"
import rightArrow from "../../imgs/rightArrow.png"

const Menu = () => {
  const menuItems = [
    { leftImage: burger, name: 'Burger', rightImage: rightArrow,backgroundColor:'red'},
    { leftImage: target, name: 'Goals', rightImage: rightArrow,backgroundColor:'green'},
    { leftImage: cloche, name: 'Menus', rightImage: rightArrow,backgroundColor:'blue'},
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-row">
          <div className="menu-left">
            <img src={item.leftImage} style={{backgroundColor:item.backgroundColor}} alt={`${item.name} left`} />
            <span>{item.name}</span>
          </div>
        
        
        
          <div className="menu-right">
            <img src={item.rightImage} alt={`${item.name} right`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
