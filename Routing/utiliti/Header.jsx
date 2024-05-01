import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
     return (
          <>
               <div className="nav">
                    <Link to={"/"}>Home</Link>
                    <Link to={"./about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
               </div>
          </>
     );
};

export default Header;
