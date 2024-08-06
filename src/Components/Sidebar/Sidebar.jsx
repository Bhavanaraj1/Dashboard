
import React,{useState} from 'react'
import './Sidebar.css'
import window from "../../imgs/window.png" 
import home from "../../imgs/home.png"
import stats from "../../imgs/stats.png"
import wallet from "../../imgs/wallet.png"
import bag from "../../imgs/bag.png"
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const icons = [
            { src:window, alt: ''},
            { src:home, alt: ''},
            { src:stats,alt: ''},
            { src:wallet, alt: ''},
            { src:bag, alt: ''},
  ]
  return (
    <div className='Sidebar'>
        {icons.map((icon, index) => (
        <div
          key={index}
          className={`icon-container ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={icon.src} alt={icon.alt} className="icon" />
        </div>
      ))}
    </div>
  )
}

export default Sidebar