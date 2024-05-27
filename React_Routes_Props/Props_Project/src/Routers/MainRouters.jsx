import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Men from '../pages/Men';
import Women from '../pages/Women';
import Girls from '../pages/Girls';

const MainRouters = () => {
  return (
       <>
            <Routes>
                 <Route path="/" element={<Men />} />
                 <Route path="women" element={<Women />} />
                 <Route path="girls" element={<Girls />} />
            </Routes>
       </>
  );
}

export default MainRouters