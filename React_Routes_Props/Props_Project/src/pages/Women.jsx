import React, { useEffect, useState } from 'react'
import Cart from '../Cart';
import axios from "axios";


const Women = () => {
    const [women, setWomen] = useState([]);

    const womenData = async () => {
        try {
            let res = await axios.get(
                 "https://renderserver-z3g5.onrender.com/women"
            );
            setWomen(res.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        womenData();
    },[])
  return (
      <div>
          <Cart data={women} />
    </div>
  )
}

export default Women