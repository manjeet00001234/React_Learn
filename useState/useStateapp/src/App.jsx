import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
     const [count, setCount] = useState(0);

     const [name, setName] = useState("");

     const [num, setNum] = useState("");

     const [email, setEmail] = useState("");

     const [pass, setPass] = useState("");

      const [submittedData, setSubmittedData] = useState([]);

     const handleNameChange = (e) => {
          e.preventDefault();
          setName(e.target.value);
     };
     const handleNumberChange = (e) => {
          e.preventDefault();
          setNum(e.target.value);
     };
     const handleEmailChange = (e) => {
          e.preventDefault();
          setEmail(e.target.value);
     };
     const handlePassChange = (e) => {
          e.preventDefault();
          setPass(e.target.value);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          // console.log(name, num, email, pass);
          setSubmittedData([...submittedData,{name,num,email,pass}])

       setName("");
       setNum("");
       setEmail("");
       setPass("");
     };


     

     return (
          <>
               <div className="main">
                    <h1>{count}</h1>
                    <button
                         className="btn1"
                         onClick={() => setCount(count + 1)}>
                         Add
                    </button>
                    <button
                         className="btn2"
                         onClick={() => setCount(count - 1)}>
                         Decrease
                    </button>
                    <button className="btn3" onClick={() => setCount(0)}>
                         Reset
                    </button>
               </div>
               <hr />

               <div className="form_contaner">
                    <h1>Registranion Form</h1>
                    <form action="" onSubmit={handleSubmit}>
                         <input
                              type="text"
                              value={name}
                              onChange={handleNameChange}
                              required
                              placeholder="Input Your Name"
                         />
                         <br />
                         <br />
                         <input
                              type="text"
                              value={num}
                              onChange={handleNumberChange}
                              required
                              placeholder="Input Your Mobile Number"
                         />
                         <br />
                         <br />
                         <input
                              type="email"
                              value={email}
                              onChange={handleEmailChange}
                              required
                              placeholder="Input Your Email"
                         />
                         <br />
                         <br />
                         <input
                              type="password"
                              value={pass}
                              onChange={handlePassChange}
                              required
                              placeholder="Input Your Pass"
                         />
                         <br />
                         <br />
                         <button>Register</button>
                    </form>
               </div>

               <div className="table_cantaner">
                    <table border={1}>
                         <thead>
                              <tr>
                                   {/* <th>S.NO</th> */}
                                   <th>NAME</th>
                                   <th>M.No</th>
                                   <th>EMAIL</th>
                                   <th>PASS</th>
                              </tr>
                         </thead>

                         <tbody>
                              {submittedData.map((data, index) => (
                                   <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.num}</td>
                                        <td>{data.email}</td>
                                        <td>{data.pass}</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </>
     );
}

export default App;
