import "./NavbarStyles.css";
import { MenuItems, MenuItemsAdmin, MenuItemsDefault, MenuItemsMed } from "./MenuItems";
import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [clicked, setClicked] = useState(false);
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const [items, setItems] = useState([]);
    const [login, setLogin] = useState(false)
    useEffect(() => {
      console.log(user)
      if(user === null){
      setItems(MenuItemsDefault)
      setLogin(true)
      }
      else {
        console.log("asaaws")
      if(user.role.name === 'PATIENT')
        setItems(MenuItems);
      else if(user.role.name === 'ADMIN'){
        setItems(MenuItemsAdmin)
      }
      else{
        setItems(MenuItemsMed)
      }}

    }, []); // Empty dependency array to run the effect only once

  const handleClick = () => {
    setClicked(!clicked)
  }

  const singUpHandle = () => {
    navigate("/signup")
  }

  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Hospital</h1>

        <div className="manu-icons">
            <i className= {clicked ? "fas fa-times" : "fas fa-bars"} onClick = {handleClick}></i>
        </div>

        <ul className= { clicked ? "nav-menu active" : "nav-menu"} >
            {items.map((item, index) => {
                return (
                <li key={index}>
                    <a className= {item.cName} href= {item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                    </a>
                </li>
                )
            })}
            <button onClick={singUpHandle}>{login ? "Sign Up" : "Deconectează-te"}</button>
        </ul>
    </nav>
  )
}

export default Navbar