import React from 'react'



let loginData = JSON.parse(localStorage.getItem("login")) || [];
let signupData = JSON.parse(localStorage.getItem("signup")) || [];
// console.log(loginData,"66666");
const LoginSignup = () => {
  return (
       <div className="main_contaner">
            <div className="login">
                 <table>
                      <caption><h1>Login Data</h1></caption>
                      <thead>
                           <tr>
                                <th>Sr.No.</th>
                                <th>Mail Id</th>
                                <th>Password</th>
                           </tr>
                      </thead>
                      <tbody>
                           {loginData.map((item, index) => {
                                return (
                                     <tr>
                                          <td>{index + 1}</td>
                                          <td>{item.email}</td>
                                          <td>{item.pass}</td>
                                     </tr>
                                );
                           })}
                      </tbody>
                 </table>
            </div>
            <div className="signup">
                 <table>
                      <caption>SignUp Data</caption>
                      <thead>
                           <tr>
                                <th>Sr.No.</th>
                                <th>Fname</th>
                                <th>Lname</th>
                                <th>Email</th>
                                <th>Password</th>
                           </tr>
                      </thead>
                      <tbody>
                           {signupData.map((item, index) => {
                                return (
                                     <tr>
                                          <td>{index + 1}</td>
                                          <td>{item.fname}</td>
                                          <td>{item.lname}</td>
                                          <td>{item.email}</td>
                                          <td>{item.pass}</td>
                                     </tr>
                                );
                           })}
                      </tbody>
                 </table>
            </div>
       </div>
  );
}

export default LoginSignup