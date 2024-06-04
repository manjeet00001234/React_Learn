import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import "../style/women.css"
import { Button, Drawer } from "antd";
import Loder from './Loder';

const Women = () => {

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const[updateId,setUpdateId]=useState(null)


const showDrawer = () => {
     setOpen(true);
};

const onClose = () => {
     setOpen(false);
};




// *******************get Data*********************
    const getData = async () => {
        try {
            let res = await axios.get(
                 "https://renderserver-z3g5.onrender.com/women"
            );
            setData(res.data)
            console.log(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    }

    //*****************delete Data*********************** */

    const delData = async (id) => {
        try {
            let dres = await axios.delete(
                `https://renderserver-z3g5.onrender.com/women/${id}`
            );
            getData();

        } catch (error) {
console.log(error);
        }
    }


    //**************patch Data************************* */

    const updateData = async () => {
        try {
            let upres = await axios.patch(
                 `https://renderserver-z3g5.onrender.com/women/${updateId}`,data
            );
        } catch (error) {
console.log(error);
        }
    }


    useEffect(() => {
        getData();
    }, [])


    return (
         <>
              {loading ? (
                   <Loder />
              ) : (
                   <div className="contaner">
                        {data.map((item) => {
                             return (
                                  <div>
                                       <img src={item.image} alt="" />
                                       <h1>{item.name}</h1>
                                       <h3>{item.price}</h3>
                                       <div className="btn">
                                            <button onClick={showDrawer}>
                                                 Edit
                                            </button>
                                            <button
                                                 onClick={() =>
                                                      delData(item.id)
                                                 }>
                                                 Delete
                                            </button>
                                       </div>
                                  </div>
                             );
                        })}
                   </div>
              )}
              <Drawer onClose={onClose} open={open}>
                   <div className="form_handel">
                        <form>
                             <caption>Updatted your data</caption>
                             <input type="text" placeholder="Enter your URL" />
                             <input type="text" placeholder="Enter your Name" />
                             <input
                                  type="text"
                                  placeholder="Enter your Price"
                             />
                             <button onClick={updateData}>Update</button>
                        </form>
                   </div>
              </Drawer>
         </>
    );
}

export default Women