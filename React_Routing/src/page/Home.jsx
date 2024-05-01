import React from "react";
import { Product } from "../utiliti/Product";
import { FaShoppingCart } from "react-icons/fa";




const cartAdd = (item) => {
  let cartValue = JSON.parse(localStorage.getItem("cart")) || [];
     cartValue.push(item);
  localStorage.setItem("cart", JSON.stringify(cartValue));
}


const Home = () => {
     return (
          <div>
               <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-20 m-10 ">
                    {Product.map((item) => {
                         return (
                              <div className="p-5 text-center shadow-2xl rounded-lg">
                                   <h1 className="text-xl m-5">
                                        Id:- {item.id}
                                   </h1>
                                   <img
                                        className="w-11/12 h-96 rounded-md m-auto"
                                        src={item.Link}
                                        alt=""
                                   />

                                   <h1 className="text-xl m-5">
                                        Brand:- {item.Brand}
                                   </h1>
                                   <h1 className="text-2xl">
                                        MRP:- {item.MRP}
                                   </h1>
                                   <button

                                        onClick={() => cartAdd(item)}
                                        className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-10 py-2 text-2xl rounded-full m-5">
                                        <FaShoppingCart />
                                   </button>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default Home;
