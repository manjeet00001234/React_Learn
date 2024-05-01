import { useState } from "react";

import "./App.css";
import Home from "../pags/Home";
import Header from "../utiliti/Header"
import Footer from "../utiliti/Footer";
import MainRouter from "../mainRouter/MainRouter";

function App() {
     return (
       <>
         <Header />
         
         <MainRouter />

         <Footer />
          </>
     );
}

export default App;
