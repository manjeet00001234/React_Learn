import React, { useEffect, useState } from "react";
import axios from "axios";
import './filter.css'

const Filter = () => {
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState([]);
    const [search, setSearch] = useState('')
    const[showr,setShowr]=useState(0)
    const[showp,setShowp]=useState(0)



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
        let reatingFilter = update.filter((ele) => ele.rating.rate > 3)
        setUpdate(reatingFilter);
        setShowr(reatingFilter.length);

    }


    // ************************price filter******************************
    const priceData = () => {
        let priceFilter = update.filter((ele) => ele.price > 55);
        setUpdate(priceFilter);
        setShowp(priceFilter.length);
    }


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
              item.category.toLowerCase().includes(e.target.value.toLowerCase())
         );
         setUpdate(filteredData);
    };
    // ******************reset Data*******************************
    const resetData = () => {
        setUpdate(data);
        setShowp(0)
        setShowr(0)
        setSearch('')
    }


// ****************************useeffect******************************
    useEffect(() => {
        getData();
},[])






    return (
         <>
              <div className="main_btn">
                   {/* <div style={{ display: "inline-flex" }}>
                        <h2>Total:-</h2>
                        <span
                             style={{
                                  padding: "7px",
                                  borderRadius: "50%",
                                  backgroundColor: "white",
                                  fontWeight: "600",
                             }}>
                             {data.length}
                        </span>
                   </div>
                   <div style={{ display: "inline-flex" }}>
                        <h2>Rating:-</h2>
                        <span
                             style={{
                                  padding: "7px",
                                  borderRadius: "50%",
                                  backgroundColor: "white",
                                  fontWeight: "600",
                             }}>
                             {showr}
                        </span>
                   </div>
                <div style={{ display: "inline-flex" }}>
                        <h2>Price:-</h2>
                        <span
                             style={{
                                  padding: "7px",
                                  borderRadius: "50%",
                                  backgroundColor: "white",
                                  fontWeight: "600",
                             }}>
                             {showp}
                    </span>




                </div> */}

                   <h2>Total:- {data.length}</h2>
                   <h2>Rating:- {showr}</h2>
                   <h2>Price:- {showp}</h2>

                   <button onClick={ratingData}> Rating Above 3</button>
                   <button onClick={priceData}> Price Above 55</button>
                   <button onClick={resetData}> Reset</button>

                   <input
                        type="search"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search products..."
                   />
              </div>
              <h1>All Product's</h1>
              <div className="main_div">
                   {update.map((item) => {
                        return (
                             <div key={item.id}>
                                  <img src={item.image} alt="image" />
                                  <h1>Category:- {item.category}</h1>
                                  <h2>Price:- {item.price}</h2>
                                  <h3>Rating:- {item.rating.rate}</h3>
                             </div>
                        );
                   })}
              </div>
         </>
    );
};

export default Filter;
