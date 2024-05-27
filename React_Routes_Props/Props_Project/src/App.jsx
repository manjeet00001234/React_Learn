import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouters from './Routers/MainRouters'
import Navbar from './utiliti/Navbar'
import Fouter from './utiliti/Fouter'



function App() {
  const [count, setCount] = useState(0)

  return (
       <>

      <Navbar />
            <MainRouters />
          <Fouter/>
       </>
  );
}

export default App
