import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Cart from '../Cart';

const Girls = () => {
    const [girls, setGirls] = useState([]);

    const girlsData = async () => {
        try {
            let res = await axios.get(
                 "https://renderserver-z3g5.onrender.com/girls"
            );
            setGirls(res.data);
        } catch (error) {
console.log(error);
        }
    }

    useEffect(() => {
        girlsData();
    }, []);
  return (
      <div>
          <Cart data={girls} />
    </div>
  )
}

export default Girls