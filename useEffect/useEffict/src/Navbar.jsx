import React from 'react'
import logo from "./image/mk_logo1.jpg";

function Navbar() {
  return (
       <div className="main_nav">
            <div className="log">
                 <img src={logo} alt="logo_img" />
            </div>
            <div className="link">
                 <ul>
                      <li>
                           <a href="">Home</a>
                      </li>
                      <li>
                           <a href="">About</a>
                      </li>
                      <li>
                           <a href="">Service</a>
                      </li>
                      <li>
                           <input type="text" placeholder="Search" />
                      </li>
                      <li>
                           <input type="text" placeholder="Filter" />
                      </li>
                 </ul>
            </div>
            <div className="heam">
                 <i class="fa-solid fa-bars"></i>
            </div>
       </div>
  );
}

export default Navbar