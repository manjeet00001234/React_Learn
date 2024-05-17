import React from "react";

const Header = () => {
     return (
          <div>
               <section id="header">
                    <a href="#">
                         <img
                              // src="https://i.postimg.cc/x8ncvFjr/logo.png"
                              src="https://png.pngtree.com/png-vector/20220809/ourmid/pngtree-vector-circle-template-featuring-a-handwritten-logo-with-initials-mk-vector-png-image_48001548.jpg"
                              alt="Logo"
                              
                         />
                    </a>
                    <div>
                         <ul id="navbar">
                              <li>
                                   <a href="index.html" className="active">
                                        Home
                                   </a>
                              </li>
                              <li>
                                   <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                   <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                   <a href="about.html">About</a>
                              </li>
                              <li>
                                   <a href="contact.html">Contact</a>
                              </li>
                              <li>
                                   <a href="cart.html" id="lg-bag">
                                        <i className="fal fa-shopping-bag"></i>
                                   </a>
                                   <span className="quantity">0</span>
                              </li>
                              <li>
                                   <a href="#" id="close">
                                        <i className="far fa-times"></i>
                                   </a>
                              </li>
                         </ul>
                    </div>
                    <div id="mobile">
                         <a href="cart.html">
                              <i className="fal fa-shopping-bag"></i>
                              <span className="quantity">0</span>
                         </a>
                         <i id="bar" className="fas fa-outdent"></i>
                    </div>
               </section>
          </div>
     );
};

export default Header;
