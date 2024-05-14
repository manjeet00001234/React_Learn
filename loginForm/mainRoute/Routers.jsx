import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../src/page/Login'
import Signup from '../src/page/Signup'
import LoginSignup from '../src/page/LoginSignup';


const Routers = () => {
  return (
       <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
       </Routes>
  );
}

export default Routers