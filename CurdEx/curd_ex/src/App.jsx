import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurdEx from './CurdEx'

function App() {
  const [count, setCount] = useState(0)




  const func = () => {
    setCount(3)
    setCount(count+3)
    console.log(count);
  }
  return (
    <>
      


      <CurdEx />
    </>
  )
}

export default App
