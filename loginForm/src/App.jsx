import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Routers from '../mainRoute/Routers'
import Navbar from './page/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
  <Routers />
    </>
  )
}

export default App
