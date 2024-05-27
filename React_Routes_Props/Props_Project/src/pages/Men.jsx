import React, { useEffect, useState } from 'react'
import Cart from '../Cart';
import axios from 'axios'

const Men = () => {
    const [men, setMen] = useState([]);

    const menData = async () => {
        try {
            let res = await axios.get(
                 "https://renderserver-z3g5.onrender.com/men"
            );
            setMen(res.data);
            console.log(res.data);
        } catch (error) {
console.log(error);
        }
    }

    useEffect(() => {
        menData();
    },[])
  return (
      <div>
          <Cart data={men} />
    </div>
  )
}

export default Men