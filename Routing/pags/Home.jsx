import React from "react";
import "./home.css";
import { Projectdata } from "./Projectdata";
import { FaCartArrowDown } from "react-icons/fa6";

const cartValue = (item) => {
     let cartData = JSON.parse(localStorage.getItem("cart")) || [];
     cartData.push(item);
     alert("hello world");
     localStorage.setItem("cart", JSON.stringify(cartData));
};

const Home = () => {
     return (
          <div className="main_div">
               {Projectdata.map((eve) => {
                    return (
                         <div className="ele_div">
                              <img className="img" src={eve.image} alt="" />
                              <h1 className="name">Name:- {eve.name}</h1>
                              <h1 className="price"> Price:- {eve.price}</h1>
                              <button
                                   className="btn"
                                   onClick={() => cartValue(item)}>
                                   <FaCartArrowDown />
                              </button>
                         </div>
                    );
               })}
          </div>
     );
};

export default Home;
