import React from "react";
import { FiShoppingCart } from "react-icons/fi";

let cartValue = JSON.parse(localStorage.getItem("cartData")) || [];
console.log(cartValue.length);
const Navbar = () => {
     return (
          <>
               <div className="nav flex justify-around shadow-2xl sticky top-0 left-0 mt-6 w-full text-center bg-slate-100">
                    <div className="logo w-1/5 cursor-pointer p-2">
                         <img
                              className="w-1/6 h-10"
                              src="https://cdn1.vectorstock.com/i/1000x1000/61/55/beauty-care-women-logo-icon-design-vector-24016155.jpg"
                              alt=""
                         />
                    </div>

                    <div className="link w-6/12 p-2">
                         <ul className="flex  justify-between text-xl">
                              <li className="cursor-pointer">Home</li>
                              <li className="cursor-pointer">About</li>
                              <li className="cursor-pointer">Contact</li>
                              <li className="cursor-pointer">Gallery</li>
                              <li className="cursor-pointer">Other's</li>
                         </ul>
                    </div>

                    <div className="heamburgur w-1/5 text-2xl p-2">
                         <h1 className=" cursor-pointer">☰</h1>
                    </div>
                    <div className="cart text-2xl m-auto cursor-pointer">
                         <h1 className="flex m-auto text-center">
                              <FiShoppingCart /> :- {cartValue.length}
                         </h1>
                    </div>
               </div>
          </>
     );
};

export default Navbar;
