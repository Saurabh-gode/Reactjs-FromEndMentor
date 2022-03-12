
import React from "react";
import './sidebar.css'

const Sidebar = (props)=>{

    return(
        <div className="sidenav">
            <img src="./assets/icon-close.svg" alt="closeimg" onClick={props.handleClick}></img>
            <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Sidebar