import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navebar from "./utilites/Navebar";
import MainRouter from "./mainRouter/MainRouter";
import Footerpart from "./utilites/Footerpart";



function App() {
     const [count, setCount] = useState(0);

     return (
          <>
               <Navebar />
         <MainRouter />
<Footerpart />
          </>
     );
}

export default App;
