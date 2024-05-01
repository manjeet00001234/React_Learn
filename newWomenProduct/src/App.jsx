import React from "react";
import "./App.css";
import Navbar from "./pages/NavbarComponent";
import { Cart } from "./pages/Cart";
import Footer from "./pages/Footer";
import AddToCart from "./pages/AddToCart";

function App() {
     return (
          <>
               <Navbar />
               <Cart />
          
               <AddToCart/>
               <Footer />
          </>
     );
}

export default App;
