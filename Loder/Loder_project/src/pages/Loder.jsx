import React from 'react'
import { Spin } from "antd";
import "../style/loder.css"


const Loder = () => {



  return (
       <div className="loding_cantener">
            <div className="spin">
                 <Spin />
                 <h1>Loding..........</h1>
            </div>
       </div>
  );
}

export default Loder






