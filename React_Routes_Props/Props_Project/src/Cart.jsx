import React from "react";
import "./cart.css";

const Cart = ({ data }) => {
     return (
          <div className="main_div">
               {data.map((item, index) => {
                    return (
                         <div className="main" key={item.id}>
                              {/* <h1>Id:- {item.id}</h1> */}
                              <img src={item.image} alt={item.name} />
                              <h3>Price:- {item.price}</h3>
                              <h3>Name:- 
                                   {/* Name:-{" "} */}
                                   {item.name
                                        ? item.name.slice(0, 15)
                                        : "No Name"}
                              </h3>
                              <h4>Rating:- {item.rating}</h4>
                              <div className="btn" id="btn">
                                   <button>add to cart🛒</button>
                                   <button>remove cart❌</button>
                              </div>
                         </div>
                    );
               })}
          </div>
     );
};

export default Cart;
