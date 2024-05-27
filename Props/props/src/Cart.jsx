import React from 'react'
import "./cart.css"

const Cart = ({data}) => {
  return (
      <div className='main_div'>
          {data.map((ele,index) => {
              return (
                   <div className="main_cantant" key={index}>
                        <img src={ele.image} alt="product" />

                        <h3>Name:- {ele.name}</h3>
                        <h4>Price:- {ele.price}</h4>
                        <h5>Rating:- {ele.rating}</h5>
                        <div className="btn">
                             <button>Add To cart🛒</button>
                             <button>Add To Fav❤️</button>
                        </div>
                   </div>
              );

          }
          )}
    </div>
  )
}

export default Cart