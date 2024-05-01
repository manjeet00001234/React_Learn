import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import About from '../pags/About'
import Contact from '../pags/Contact'
import Home from '../pags/Home'


const MainRouter = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />

          </Routes>
    </div>
  )
}

export default MainRouter