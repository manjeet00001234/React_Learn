import React from "react";
import { Link } from "react-router-dom";
const Navebar = () => {
    return (
         <>
              <div className=" w-full flex justify-evenly text-center  border bg-slate-800 shadow-2xl sticky top-0">
                   <div className="logo w-1/5 p-4 m-auto">
                        <Link to={"/"}>
                             <img
                                  className="w-1/5 rounded-xl"
                                  src="https://static.vecteezy.com/system/resources/thumbnails/005/466/542/small/m-logo-letter-icon-monogram-m-letter-design-with-white-line-monogram-and-minimalist-modern-creative-look-vector.jpg"
                                  alt=""
                             />
                        </Link>
                   </div>
                   <div className="link flex text-white w-2/4 justify-between m-auto font-semibold p-4">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to={"/project"}>Project</Link>
                   </div>
                   <div className="heamburgur w-1/5 p-4 text-white m-auto">
                        <h1></h1>
                   </div>
              </div>
         </>
    );
};

export default Navebar;
