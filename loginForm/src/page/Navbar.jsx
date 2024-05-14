import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
       <div className="nav">
            <Link to={"/"}>Login</Link>
            <Link to={"/signup"}>SignUp</Link>
            <Link to={"/loginsignup"}>Login & SignUP</Link>
       </div>
  );
}

export default Navbar