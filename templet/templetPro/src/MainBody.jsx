import React, { useEffect } from "react";
import { data } from "./Data";
import { data1 } from "./Data";


const MainBody = () => {
     useEffect(() => {
          const bar = document.getElementById("bar");
          const close = document.getElementById("close");
          const nav = document.getElementById("navbar");

          if (bar) {
               bar.addEventListener("click", () => {
                    nav.classList.add("active");
               });
          }

          if (close) {
               close.addEventListener("click", () => {
                    nav.classList.remove("active");
               });
          }


          return () => {
               if (bar) {
                    bar.removeEventListener("click", () => {
                         nav.classList.add("active");
                    });
               }

               if (close) {
                    close.removeEventListener("click", () => {
                         nav.classList.remove("active");
                    });
               }
          };
     }, []);

     return (
          <div>
               <section id="hero">
                    <h4>Trade-in-fair</h4>
                    <h2>Super value deals</h2>
                    <h1>On all Products</h1>
                    <p>Save more with coupons and up to 70% off!</p>
                    <button>Shop Now</button>
               </section>

               <section id="feature" className="section-p1">
                    <div className="fe-box">
                         <img
                              src="https://i.postimg.cc/PrN2Y6Cv/f1.png"
                              alt=""
                         />
                         <h6>Free Shipping</h6>
                    </div>
                    <div className="fe-box">
                         <img
                              src="https://i.postimg.cc/qvycxW4q/f2.png"
                              alt=""
                         />
                         <h6>Online Order</h6>
                    </div>
                    <div className="fe-box">
                         <img
                              src="https://i.postimg.cc/1Rdphyz4/f3.png"
                              alt=""
                         />
                         <h6>Save Money</h6>
                    </div>
                    <div className="fe-box">
                         <img
                              src="https://i.postimg.cc/GpYc2JFZ/f4.png"
                              alt=""
                         />
                         <h6>Promotions</h6>
                    </div>
                    <div className="fe-box">
                         <img
                              src="https://i.postimg.cc/4yFCwmv6/f5.png"
                              alt=""
                         />
                         <h6>Happy Sell</h6>
                    </div>
                    <div className="fe-box">
                         <img
                              src="https://i.postimg.cc/gJN1knTC/f6.png"
                              alt=""
                         />
                         <h6>F24/7 Support</h6>
                    </div>
               </section>

               <section id="product1" className="section-p1">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Modern Design</p>
                    <div className="pro-container">
                         {data.map((product) => (
                              <div
                                   className="pro"
                                   key={product.id}
                                   onClick={() =>
                                        product.link &&
                                        (window.location.href = product.link)
                                   }>
                                   <img src={product.imgSrc} alt="" />
                                   <div className="des">
                                        <span>{product.brand}</span>
                                        <h5>{product.name}</h5>
                                        <div className="star">
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                        </div>
                                        <h4>{product.price}</h4>
                                   </div>
                                   <a href="">
                                        <i className="fal fa-shopping-cart cart"></i>
                                   </a>
                              </div>
                         ))}
                    </div>
               </section>

               <section id="banner" className="section-m1">
                    <h4>Repair Service</h4>
                    <h2>
                         Up to <span>70% off</span> - All Tshirts and
                         Accessories
                    </h2>
                    <button className="btn normal">Explore more</button>
               </section>

               <section id="product1" className="section-p1">
                    <h2>New Arrivals</h2>
                    <p>Summer Collection New Modern Design</p>
                    <div className="pro-container">
                         {data1.map((product) => (
                              <div className="pro" key={product.id}>
                                   <img src={product.imgSrc} alt="" />
                                   <div className="des">
                                        <span>{product.brand}</span>
                                        <h5>{product.name}</h5>
                                        <div className="star">
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                        </div>
                                        <h4>{product.price}</h4>
                                   </div>
                                   <a href="">
                                        <i className="fal fa-shopping-cart cart"></i>
                                   </a>
                              </div>
                         ))}
                    </div>
               </section>

               <section id="sm-banner" className="section-p1">
                    <div className="banner-box">
                         <h4>crazy deals</h4>
                         <h2>buy 1 get 1 free</h2>
                         <span>The best classic dress is on sales at cara</span>
                         <button className="btn white">Learn More</button>
                    </div>
                    <div className="banner-box banner-box2">
                         <h4>spring/summer</h4>
                         <h2>upcoming season</h2>
                         <span>The best classic dress is on sales at cara</span>
                         <button className="btn white">Collection</button>
                    </div>
               </section>

               <section id="banner3">
                    <div className="banner-box">
                         <h2>SEASONAL SALE</h2>
                         <h3>Winter Collection -50% OFF</h3>
                    </div>
                    <div className="banner-box banner-box2">
                         <h2>NEW FOOTWEAR COLLECTION</h2>
                         <h3>Spring / Summer 2022</h3>
                    </div>
                    <div className="banner-box banner-box3">
                         <h2>T-SHIRTS</h2>
                         <h3>New Trendy Prints</h3>
                    </div>
               </section>

               <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                         <h4>Sign Up For Newsletters</h4>
                         <p>
                              Get E-mail updates about our latest shop and{" "}
                              <span>special offers.</span>
                         </p>
                    </div>
                    <div className="form">
                         <input type="text" placeholder="Your email address" />
                         <button className="normal">Sign Up</button>
                    </div>
               </section>
          </div>
     );
};

export default MainBody;

