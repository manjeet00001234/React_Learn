import React, { useEffect, useState } from "react";
import axios from "axios";
import "./filter.css";

const Filter = () => {
     const [data, setData] = useState([]);
     const [update, setUpdate] = useState([]);
     const [search, setSearch] = useState("");
     const [showr, setShowr] = useState(0);
     const [showp, setShowp] = useState(0);

     const getData = async () => {
          try {
               let res = await axios.get("https://fakestoreapi.com/products");
               setData(res.data);
               setUpdate(res.data);
          } catch (error) {
               console.log(error);
          }
     };

     // ************************ rating filter******************************
     const ratingData = () => {
          let reatingFilter = update.filter((ele) => ele.rating.rate > 3);
          setUpdate(reatingFilter);
          setShowr(reatingFilter.length);
     };

     // ************************price filter******************************
     const priceData = () => {
          let priceFilter = update.filter((ele) => ele.price > 55);
          setUpdate(priceFilter);
          setShowp(priceFilter.length);
     };

     // ********************search Data**********************

     // const handleSearch = () => {

     //       const filteredData = data.filter((item) =>
     //            item.category.toLowerCase().includes(e.target.value)
     //       );
     //      setUpdate(filteredData)
     //  };

     //     const itemSearch = (e) => {
     //         setSearch(e.target.value);
     //         handleSearch();
     // }

     const handleSearch = (e) => {
          setSearch(e.target.value);
          const filteredData = data.filter((item) =>
               item.category
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
          );
          setUpdate(filteredData);
     };
     // ******************reset Data*******************************
     const resetData = () => {
          setUpdate(data);
          setShowp(0);
          setShowr(0);
          setSearch("");
     };

     // ****************************useeffect******************************
     useEffect(() => {
          getData();
     }, []);

     return (
          <>
               <div className="main_btn">
                    <div className="img">
                         <img
                              src="https://png.pngtree.com/png-vector/20220809/ourmid/pngtree-vector-circle-template-featuring-a-handwritten-logo-with-initials-mk-vector-png-image_48001548.jpg"
                              alt=""
                         />
                    </div>
                    <div className="btn">
                         <h2>Total:- {data.length}</h2>
                         <h2>Rating:- {showr}</h2>
                         <h2>Price:- {showp}</h2>
                    </div>
               </div>

               <div className="main_div">
                    <div className="side_bar">
                         <button onClick={ratingData}>Rating</button>
                         <br />
                         <button onClick={priceData}>Price</button>
                         <br />
                         <button onClick={resetData}>Reset</button>
                         <br />
                         <input
                              type="search"
                              value={search}
                              onChange={handleSearch}
                              placeholder="Search products..."
                         />
                         <button>Search</button>
                         <br />
                    </div>

                    <div className="project">
                         {update.map((item) => {
                              return (
                                   <div key={item.id}>
                                        <img src={item.image} alt="image" />
                                        <h1>
                                             Category:-{" "}
                                             {item.category.slice(0, 5)}
                                        </h1>
                                        <h2>Price:- {item.price}</h2>
                                        <h3>Rating:- {item.rating.rate}</h3>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </>
     );
};

export default Filter;
