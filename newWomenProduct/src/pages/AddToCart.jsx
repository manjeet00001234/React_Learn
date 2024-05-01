import React from "react";

let showCartData = JSON.parse(localStorage.getItem("cartData")) || [];
const AddToCart = () => {
     return (
          <div className="m-10">
               <h1 className="text-2xl text-red-500 text-center">
                    Add To Cart Data Value
               </h1>

               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center mt-10">
                    {showCartData.map((item) => {
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
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default AddToCart;
