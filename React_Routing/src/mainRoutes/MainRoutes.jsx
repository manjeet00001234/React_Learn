import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Contact from '../page/Contact'
import Project from '../page/Project'
import NoteFound from '../page/NoteFound'


const MainRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='project' element={<Project />} />
              <Route path='*' element={<NoteFound/>} />

          </Routes>
    </div>
  )
}

export default MainRoutes