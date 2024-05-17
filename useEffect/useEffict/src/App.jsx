import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
     const [data1, setData] = useState([]);

     // let api = "https://fair-gray-dove-kilt.cyclic.app/Hotel";
     let api = "https://fakestoreapi.com/products";
     const getData = async () => {
          try {
               let res = await axios.get(api);

               setData(res.data);
               console.log(res.data);
          } catch (error) {
               console.log(error);
          }
     };

     useEffect(() => {
          getData();
     }, []);
     return (
          <div className="main_div">
               {data1.map((item,index) => {
                    return (
                         <div key={index}>
                              <h1>Id:-{item.id}</h1>
                              <img src={item.image} />
                              {/* <h2>
                                   HotelName:-{item.HotelName.slice(0, 5)}.....
                              </h2> */}
                              {/* <h2>City:-{item.city}</h2> */}
                              <h2>Category:-${item.category}</h2>
                              {/* <h2>Price:-${item.category}</h2> */}
                              <h2>Price:-${item.price}</h2>
                              <button>Bye Now</button>
                         </div>
                    );
               })}
          </div>
     );
}

export default App;
