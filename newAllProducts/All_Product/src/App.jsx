import "./App.css";
import { allProductData } from "./utilit/allProductData";

function App() {
     return (
          <>
               <div className="nav">
                    <div className="logo">
                         <img
                              src="https://t4.ftcdn.net/jpg/03/74/13/35/360_F_374133528_KaQYbAxpf0zZx7FA0Aa6myf6nmna8fDJ.jpg"
                              alt=""
                         />
                    </div>
                    <div className="link">
                         <ul>
                              <li>Home</li>
                              <li>About</li>
                              <li>Contact</li>
                              <li>Project</li>
                              <li>Other's</li>
                         </ul>
                    </div>
                    <div className="heamburger">
                         <h1>☰</h1>
                    </div>
               </div>

         <div className="main_contaner">
           {allProductData.map((item) => {
             return (
               <div>
                 <h1 className="text-2xl m-5">{`Id:- ${item.id}`}</h1>
                 <img src={item.image} alt="" />
                 <h2 className="text-xl m-5">{`Brand:- ${item.brand}`}</h2>
                 <h1 className="text-2xl m-5">{`Price:- ${item.price}`}</h1>
              </div>
            )
           })}

         </div>
          </>
     );
}

export default App;
