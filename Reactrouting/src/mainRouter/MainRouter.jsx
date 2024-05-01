import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Project from "../pages/Project";
import Pagenotefound from "../pages/Pagenotefound";

const MainRouter = () => {
     return (
          <div>
               <Routes>
                 <Route path="/" element={<Home />}></Route>
                     <Route path="/about" element={<About />}></Route>
                     <Route path="/contact" element={<Contact />}></Route>
                 <Route path="/project" element={<Project />}></Route>
                 <Route path="/*" element={<Pagenotefound />}></Route>

               </Routes>
          </div>
     );
};

export default MainRouter;
