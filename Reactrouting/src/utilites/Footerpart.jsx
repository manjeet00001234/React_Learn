import React from "react";
import {
     FaFacebookF,
     FaWhatsapp,
     FaLinkedinIn,
     FaTwitter,
} from "react-icons/fa";
const Footerpart = () => {
    return (
         <div className="w-full bg-slate-950 p-20 mt-10">
              <div className="flex justify-between ">
                   <div className="w-1/5">
                        <img
                             className="w-20 rounded-lg my-5"
                             src="https://t3.ftcdn.net/jpg/01/43/82/78/360_F_143827858_Qppm7ziZjS9JXoVaUDQSx6vIFDBOMFad.jpg"
                             alt=""
                        />
                        <p className="text-white">
                             Lorem ipsum dolor sit amet consectetur, adipisicing
                             elit. Perspiciatis similique molestias saepe, ipsum
                             quae itaque et dolor tempora vel beatae autem amet
                             facilis mollitia veniam, illum fugiat doloremque
                             magnam voluptate?
                        </p>
                   </div>
                   <div className="w-1/5 text-white">
                        <h1 className="text-white text-3xl my-5">Product</h1>
                        <h1>ZenBlend</h1>
                        <h1>LuminaSphere</h1>
                        <h1>FlexiGrip</h1>
                        <h1>workouts</h1>
                   </div>

                   <div className="w-1/5">
                        <h1 className="text-white text-3xl my-5">Usefull Link</h1>
                        <h1 className="text-white" href="">
                             Gallery
                        </h1>
                        <h1 className="text-white" href="">
                             Contact
                        </h1>
                        <h1 className="text-white" href="">
                             User's
                        </h1>
                        <h1 className="text-white" href="">
                             Product
                        </h1>
                   </div>
                   <div className="w-1/5 text-white">
                        <h1 className="text-3xl my-5">Address</h1>
                        <p>PHQ</p>
                        <p>Lal kothi</p>
                        <p>Jaipir</p>
                        <p>Pin:- 302013</p>
                   </div>
            </div>

            <div className="text-white text-3xl w-1/4 m-auto mt-12 flex justify-between"><FaFacebookF/> <FaWhatsapp /> <FaLinkedinIn /> <FaTwitter /></div>
         </div>
    );
};

export default Footerpart;
