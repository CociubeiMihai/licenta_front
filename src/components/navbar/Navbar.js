import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [clicked, setClicked] = useState(false);
    let navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked)
  }

  const singUpHandle = () => {
    navigate("signup")
  }

  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Hospital</h1>

        <div className="manu-icons">
            <i className= {clicked ? "fas fa-times" : "fas fa-bars"} onClick = {handleClick}></i>
        </div>

        <ul className= { clicked ? "nav-menu active" : "nav-menu"} >
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>
                    <a className= {item.cName} href= {item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                    </a>
                </li>
                )
            })}
            <button onClick={singUpHandle}>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar