import React from 'react'
import {Routes,Route} from "react-router-dom"
import Men from '../pages/Men'
import Women from '../pages/Women'

const MainRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Men />} />
              <Route path='women' element={<Women />} />
          </Routes>
    </div>
  )
}

export default MainRoutes