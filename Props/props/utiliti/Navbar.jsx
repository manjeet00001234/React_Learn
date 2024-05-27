import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
       <div className="nav_bar">
            <div className="logo_img">
                 <img
                      src="data:image/jpeg;base64,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"
                      alt="logo_img"
                 />
            </div>
            <div className="link">
                 <ul>
                      <li>
                           <a href="">
                                <Link to={"/"}>Men</Link>
                           </a>
                      </li>
                      <li>
                           <a href="">
                                <Link to={"women"}>Women</Link>
                           </a>
                      </li>
                      {/* <li>
                           <a href=""></a>
                      </li>
                      <li>
                           <a href=""></a>
                      </li> */}
                 </ul>

                 {/* <Link to={"/"}>Men</Link> */}
                 {/* <Link to={"women"}>Women</Link> */}
            </div>
       </div>
  );
}

export default Navbar