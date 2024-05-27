import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cart from '../src/Cart';

const Women = () => {
    const [women, setWomen] = useState([]);

    const womenData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/women");
            setWomen(res.data)
            console.log(res.data);
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