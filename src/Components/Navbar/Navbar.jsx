import React from 'react'
import "./Navbar.css"
import message from "../../imgs/message.png"
import setting from "../../imgs/setting.png"
import notify from "../../imgs/notify.png"
import img4 from "../../imgs/img4.png"
import search from "../../imgs/search.png"
const Navbar = () => {
  return (
    <nav className='Navbar'>
        < div className='Navbar-sections'>
        <div className="search">
            <input type = 'text'class="search-input"  placeholder='Search'/>
            <img src = {search} alt= ""/> 
        </div>
        <div className="logos">

           <a href="#"> <img src = {message} alt =""/></a>
           <a href="#"> <img src = {setting} alt =""/></a>
           <a href="#"> <img src = {notify} alt =""/></a>
           <a href="#"> <img src = {img4} alt =""/></a>
        </div>    
        </div>
    </nav>
  )
}

export default Navbar