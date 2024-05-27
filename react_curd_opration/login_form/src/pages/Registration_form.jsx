import React, { useEffect, useState } from "react";
import "./registration_form.css";
import axios from 'axios';


let inisial_data = {
     name: "",
     email:""
}
const Registration_form = () => {
     const [data, setData] = useState(inisial_data);
     const[value,setValue]=useState([])

     let user_data = (e) => {
          const { name, value } = e.target;
          setData((eve) => {
               return {...eve, [name]: value};
           })
     }

     const postDataSubmited = async () => {
          try {
               let pres = await axios.post("http://localhost:8080/data", data);
               setData(pres.data)
               alert("data submited")
               getData();
          } catch (error) {
console.log(error);
          }
          setData(inisial_data);
     }

     const getData = async () => {
          try {
               let gres = await axios.get("http://localhost:8080/data");
               setValue(gres.data);
          } catch (error) {
console.log(error);
          }
     }


     const delData = async (id) => {
          try {
               let dres = await axios.delete(`http://localhost:8080/data/${id}`);
               alert("data deletted")
               getData()
          } catch (error) {
               console.log(error);
          }
     }

     useEffect(() => {
          getData();
     },[])
     return (
          <>
               <div className="main_contaner">
                    <h1>Registration_form</h1>
                    <form action="">
                         <input
                              type="text"
                              placeholder="Enter your Name"
                              name="name"
                              value={data.name}
                              onChange={user_data}
                         />{" "}
                         <br />
                         <input
                              type="email"
                              placeholder="Enter your Email"
                              name="email"
                              value={data.email}
                              onChange={user_data}
                         />
                         <br />
                         <button onClick={postDataSubmited}>submit</button>
                    </form>
               </div>


               <div className="table_contaner">
                    <table border={1}>
                         <caption>Registration Data</caption>
                         <thead>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Action</th>
                         </thead>
                         <tbody>
                              {value.map((item) => {
                                   return (
                                        <tr>
                                             <td>{item.id}</td>
                                             <td>{item.name}</td>
                                             <td>{item.email}</td>
                                             <td><button style={{backgroundColor:"red"}} onClick={() => delData(item.id)}>delete</button></td>
                                        </tr>
                                   );
                              })

                              }
                         </tbody>
                    </table>
               </div>
          </>
     );
};

export default Registration_form;
