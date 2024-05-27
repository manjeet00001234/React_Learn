import React, { useEffect, useState } from 'react'
import Cart from '../src/Cart';
import axios from "axios"

const Men = () => {
    const [men, setMen] = useState([]);

    const menData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/men");
            console.log(res);
            setMen(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        menData();
    }, []);
  return (
      <div>
          <Cart data={men}/>
    </div>
  )
}

export default Men