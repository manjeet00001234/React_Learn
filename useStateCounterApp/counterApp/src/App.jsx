import { useState } from "react";
import "./App.css";

function App() {
     const [count, setCount] = useState(0);

     const add = () => {
          setCount(count + 1);
     };
     const reset = () => {
          setCount(0);
     };



     const red = () => {
          setCount((count) => (count > 0 ? count - 1 : 0));
     };

     return (
       <>
         <h2>COUNTER APP</h2>
         <div className="main_countaner">

                    <h1>{count}</h1>
                    <div className="main_btn">
                         <button onClick={add}>Add</button>
                         <button onClick={reset}>Reset</button>
                         <button onClick={red}>
                              Reduse
                         </button>
                    </div>
               </div>
          </>
     );
}

export default App;
