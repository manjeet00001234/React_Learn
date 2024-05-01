import React from "react";

let cartShowData = JSON.parse(localStorage.getItem("cart")) || [];

// console.log(cartShowData[0].MRP);
let value;
let dis;
let discounttotal;
let numVal;
for (let i = 0; i < cartShowData.length; i++) {
     value = cartShowData[i].MRP.slice(1);
     numVal = parseInt(value);
     dis = cartShowData[i].DiscountFinal.slice(0, 2);

     // console.log(dis);
     let total = numVal * (dis / 100);
     discounttotal = total;

     console.log(discounttotal);
}

const About = () => {
     return (
          <div className="grid lg:grid-cols-4 ms:grid-cols-2 sm:grid-cols-1 gap-10 text-center m-20">
               {cartShowData.map((item) => {
                    return (
                         <div className="shadow-2xl p-5 leading-8">
                              <img
                                   className="w-9/12 rounded-lg m-auto"
                                   src={item.Link}
                                   alt=""
                              />
                              <h1>Brand:- {item.Brand}</h1>
                              <h1>MRP:- {item.MRP}</h1>
                              <h1>Discount:- {item.DiscountFinal}</h1>
                              <h1>{discounttotal}</h1>
                         </div>
                    );
               })}
          </div>
     );
};

export default About;
