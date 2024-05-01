import React from "react";
import { newWomenProduct } from "../utilities/newWomenProduct";
import { BiCartAdd } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const addToCart = (item) => {
     let arr = JSON.parse(localStorage.getItem("cartData")) || [];
     arr.push(item);
     localStorage.setItem("cartData", JSON.stringify(arr));
     alert("Item Added To Cart");
};
// console.log(item.length);
export const Cart = () => {
     return (
          <div className="m-10">
               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center mt-10">
                    {newWomenProduct.map((item) => {
                         return (
                              <div className="shadow-2xl p-4 rounded-xl">
                                   <h1 className="text-xl">{`Id:- ${item.id}`}</h1>
                                   <img
                                        className="w-3/4 h-72 m-auto p-3"
                                        src={item.image}
                                        alt=""
                                   />
                                   <h1 className="text-sm">{`Category:- ${item.category}`}</h1>
                                   <h1 className="text-base m-3">{`Brand:- ${item.brand}`}</h1>
                                   <h1 className="text-xl">{`Price:- ${item.price}`}</h1>
                                   <div className="flex w-3/4 m-auto justify-between m-5">
                                        <button
                                             onClick={() => addToCart(item)}
                                             className="text-xl bg-sky-400 hover:bg-sky-800 text-white py-2 px-5 rounded-xl ease-in-out duration-500">
                                             <BiCartAdd />
                                        </button>

                                        <button className="text-xl bg-rose-500 hover:bg-rose-800 text-white py-2 px-5 rounded-xl ease-in-out duration-500">
                                             <RiDeleteBin6Line />

                                        </button>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};
