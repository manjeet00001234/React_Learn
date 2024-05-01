import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
       <div className="sticky top-0">
            <div className="main w-full flex justify-around bg-slate-300 text-center shadow-2xl ">
                 <div className="logo w-1/5 m-auto">
                      <img
                           className="w-20 rounded-3xl cursor-pointer"
                           src="https://s.tmimgcdn.com/scr/1200x750/296000/letter-m-monogram-beauty-logo-design_296083-original.jpg"
                           alt=""
                      />
                 </div>
                 <div className="link w-2/4 flex justify-between m-auto text-xl p-5">
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact</Link>
                      <Link to="/project">Project</Link>
                 </div>
                 <div className="heam w-1/5 m-auto text-xl p-5">icon</div>
            </div>
       </div>
  );
}

export default Navigation