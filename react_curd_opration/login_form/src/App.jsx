import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration_form from './pages/Registration_form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registration_form/>
    </>
  )
}

export default App
