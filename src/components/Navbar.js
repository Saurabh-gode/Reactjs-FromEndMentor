import React from "react";
import Sidebar from "./Sidebar";

import './navbar.css'
const Navbar = ()=>{

  const [clicked , setClicked] = React.useState(false)

  const handleClick =()=>{
    setClicked((prevState)=>{
      return !prevState;
    })
  }
    return (
        <div>
          <nav>
            <div className="nav-links">
              <button className="menu-btn" onClick={handleClick}><img src="./assets/icon-menu.svg" alt="menuimg"/></button>
              <a href="#"><img src="./assets/logo.svg" alt="logo" className="logo" /></a>
              <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="user">
              <img src="./assets/icon-cart.svg" alt="cartimg" className="cart-logo" />
              <a href="#"><img src="./assets/image-avatar.png" alt="avatar" className="user-logo" /></a>
            </div>
          </nav>
          <div className="underline" />

          {clicked && <Sidebar handleClick= {handleClick}/>}
        </div>
    )
}


export default Navbar