import React, { useEffect, useState } from "react";
import "./curd.css";
import "axios";
import axios from "axios";

let initicial = {
     name: "",
     email: "",
};
const Curd = () => {
     const [data, setData] = useState(initicial);
    const [value, setValue] = useState([]);
    const[updateId,setUpdateId]=useState(null)

     const userData = (e) => {
          const { name, value } = e.target;
          setData((pre) => ({
               ...pre,
               [name]: value,
          }));
    };


    // ******************update data function******************

    const updateData = async () => {
        try {
            let upres = await axios.patch(`http://localhost:8080/data/${updateId}`,data);
userGetData();
        } catch (error) {
console.log(error);
        }
    }



    // ****************gating value inbox on edit button************************
    const handelUpdate = (id) => {
        const selectedItem = value.find((item) => item.id === id);
        if (selectedItem) {
            setData(selectedItem);
            setUpdateId(id)
        }
}
     // ***************post data****************************
     const postData = async () => {
          try {
              let pres = await axios.post("http://localhost:8080/data", data);
            //   setData(pres);
               userGetData();
          } catch (error) {
               console.log(error);
          }
     };

     // *****************get data*********************
     const userGetData = async () => {
          try {
               let gres = await axios.get("http://localhost:8080/data");
               setValue(gres.data);
               console.log(gres.data);
          } catch (error) {
               console.log(error);
          }
     };

     // *************************delete data******************
     const delData = async (id) => {
          try {
               let dres = await axios.delete(
                    `http://localhost:8080/data/${id}`
               );
               alert("data deleted");
               userGetData();
          } catch (error) {
               console.log(error);
          }
     };

     // **********************data submitted***********************
     const userDataSubmited = async (e) => {
         e.preventDefault();
         if (updateId) {
             updateData();
            alert("updated")
             setData(initicial);
             setUpdateId(null)
         } else {
             postData();
             alert("added")
             setData(initicial);

         }

     };

     // ************useEffect*******************************************
     useEffect(() => {
          userGetData();
     }, []);
     return (
          <>
               <div className="form_main">
                    <h1>Registration Form</h1>
                    <form action="">
                         <input
                              type="text"
                              placeholder="Enter Your Name"
                              name="name"
                              value={data.name}
                              onChange={userData}
                         />
                         <br />
                         <input
                              type="email"
                              placeholder="Enter Your Email"
                              name="email"
                              value={data.email}
                              onChange={userData}
                         />
                         <br />
                         <button onClick={userDataSubmited}>Submit</button>
                    </form>
               </div>

               {/* -------------------------------------------------------------------------- */}

               <div className="table_counter">
                    <table border={1}>
                         <caption>
                              <h1>Registration Data</h1>
                         </caption>
                         <thead>
                              <tr>
                                   <th>Id</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {value.map((item) => {
                                   return (
                                        <tr>
                                             <td>{item.id}</td>
                                             <td>{item.name}</td>
                                             <td>{item.email}</td>
                                             <td>
                                                  <button
                                                       onClick={() =>
                                                            delData(item.id)
                                                       }>
                                                       Delete
                                                  </button>
                                                  <button onClick={()=>handelUpdate(item.id)}>Edid</button>
                                             </td>
                                        </tr>
                                   );
                              })}
                         </tbody>
                    </table>
               </div>
          </>
     );
};

export default Curd;
