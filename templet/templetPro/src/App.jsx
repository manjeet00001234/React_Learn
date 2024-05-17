import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import MainBody from './MainBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    
    </>
  )
}

export default App
