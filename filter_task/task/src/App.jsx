import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Filter from "./Filter";
import Footer from "./utiliti/Footer";




// function App() {
//      const [count, setCount] = useState([]);
//      // const [price, setPrice] = useState([]);
//      const [searchTerm, setSearchTerm] = useState("");


//      // *****************get Data*******************

//      const getData = async () => {
//           try {
//                let res = await axios.get(
//                     "https://renderserver-z3g5.onrender.com/men"
//                );

//                setCount(res.data);
//                // setPrice(res.data)
//           } catch (error) {
//                console.log(error);
//           }
//      };

//      // ********************filter rating Data********************
//      const filterData = () => {
//           let filterRating = count.filter((ele) => ele.rating > 2);
//           filterRating.sort((a, b) => b.price - a.price);
//           // setPrice(filterRating);
//           setCount(filterRating);
//      };

//      // ***********************filter price Data********************

//      const filterPrice = async () => {
//           let filterPrice = count.filter((ele) => ele.price > 10);
//           filterPrice.sort((a,b)=>b.price-a.price)
//           setCount(filterPrice);
//      };

//      // *********************all Data*************************
//      const allShowData = async () => {
//           // Window.location.reload()
//           // getData();
//               window.location.reload();
//      };



//      // ***************search Data************************
//      // const searchData = () => {
//      //      let searchValue = count.filter((ele) => ele.title)
//      //      setCount(searchValue);
//      // }

//        const searchData = (event) => {
//             const searchValue = event.target.value.toLowerCase();
//             setCount(searchValue);
//             const filtered = count.filter((item) =>
//                  item.name.toLowerCase().includes(searchValue)
//             );
//             setCount(filtered);
//        };

//      useEffect(() => {
//           getData();
//      }, []);

//      return (
//           <>
//                <div className="main_btn">
//                     <button onClick={filterData}>filter Rating data</button>
//                     <button onClick={allShowData}>Reset</button>
//                     <button onClick={filterPrice}>filter price data</button>
//                     {/* <input type="search" onChange={searchData} /> */}
//                     <input
//                          type="search"
//                          placeholder="Search by name"
//                          onChange={searchData}
//                          value={searchTerm}
//                     />
//                </div>
//                <div
//                     style={{
//                          display: "grid",
//                          gridTemplateColumns: "repeat(5,1fr)",
//                     }}>
//                     {count.map((item) => {
//                          return (
//                               <div>
//                                    <img
//                                         style={{ width: "90%" }}
//                                         src={item.image}
//                                         alt=""
//                                    />
//                                    <h3>Name:- {item.name}</h3>
//                                    <h1>Price:- {item.price}</h1>
//                                    <h2>Rating:- {item.rating}</h2>
//                               </div>
//                          );
//                     })}
//                </div>
//           </>
//      );
// }


function App() {
     const [data, setData] = useState([]);
     const [filteredData, setFilteredData] = useState([]);
     const [searchTerm, setSearchTerm] = useState("");

     // Fetch data from API
     const getData = async () => {
          try {
               const res = await axios.get(
                    "https://renderserver-z3g5.onrender.com/men"
               );
               setData(res.data);
               setFilteredData(res.data);
          } catch (error) {
               console.log(error);
          }
     };

     // Filter by rating
     const filterByRating = () => {
          const filtered = data.filter((item) => item.rating > 2);
          filtered.sort((a, b) => b.price - a.price);
          setFilteredData(filtered);
     };

     // Filter by price
     const filterByPrice = () => {
          const filtered = data.filter((item) => item.price > 10);
          filtered.sort((a, b) => b.price - a.price);
          setFilteredData(filtered);
     };

     // Reset filters and refresh the page
     const resetFilters = () => {
          window.location.reload();
     };

     // Search data
     const searchData = (event) => {
          const searchValue = event.target.value;
          setSearchTerm(searchValue);
          const filtered = data.filter((item) =>
               item.name.toLowerCase().includes(searchValue)
          );
          setFilteredData(filtered);
     };

     useEffect(() => {
          getData();
     }, []);

     return (
          <>
               <Filter />
               {/* <div className="main_btn">
                    <button onClick={filterByRating}>Filter Rating Data</button>
                    <button onClick={resetFilters}>Reset</button>
                    <button onClick={filterByPrice}>Filter Price Data</button>
                    <input
                         type="search"
                         placeholder="Search by name"
                         onChange={searchData}
                         value={searchTerm}
                    />
               </div>
               <div
                    style={{
                         display: "grid",
                         gridTemplateColumns: "repeat(5, 1fr)",
                    }}>
                    {filteredData.map((item) => (
                         <div key={item.id}>
                              <img
                                   style={{ width: "90%" }}
                                   src={item.image}
                                   alt=""
                              />
                              <h3>Name: {item.name}</h3>
                              <h1>Price: {item.price}</h1>
                              <h2>Rating: {item.rating}</h2>
                         </div>
                    ))}
               </div> */}

               <Footer />
          </>
     );
}

export default App;
