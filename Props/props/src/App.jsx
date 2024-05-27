import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../utiliti/Navbar'
import MainRoutes from '../Routing/MainRoutes'
import Footer from '../utiliti/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App
