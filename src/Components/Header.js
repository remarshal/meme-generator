import React, { useState } from "react";
import logo from "../images/logo.png";
import "../style.css";

function Header() {
   const [theme, setTheme] = useState(true);

   function chgTheme() {
      setTheme((prevState) => !prevState);
   }

   let newTheme;
   if (theme) {
      newTheme = "Dark";
      document.querySelector("body").style.backgroundColor = "white";
   } else {
      newTheme = "Light";
      document.querySelector("body").style.backgroundColor = "black";
   }

   return (
      <div>
         <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h2 className="header-title">meme generator</h2>
            <button className="header-button" onClick={chgTheme}>
               {newTheme} Theme
            </button>
         </header>
      </div>
   );
}

export default Header;
