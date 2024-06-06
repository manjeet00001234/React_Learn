import React, { useEffect, useState } from "react";
import axios from "axios";

let obj = {
     name: "",
     email: "",
};
const CurdEx = () => {
     const [data, setData] = useState(obj);
    const [value, setValue] = useState([]);
    const[updateId,setUpdateId]=useState(null)



    
     const userData = (e) => {
          const { name, value } = e.target;

          setData((pre) => ({
               ...pre,
               [name]: value,
          }));
     };

     // *************getData*****************************
     const getData = async () => {
          try {
               let gres = await axios.get("http://localhost:8080/data");
               setValue(gres.data);
               console.log(gres.data);
          } catch (error) {
               console.log(error);
          }
     };

     // *************post Data******************************************
     const postData = async () => {
          try {
               let pres = await axios.post("http://localhost:8080/data", data);
              setData(pres);
              getData()
          } catch (error) {
               console.log(error);
          }
     };

     // ********************delete data******************

     const deleteData = async (id) => {
          try {
               let dres = await axios.delete(
                    `http://localhost:8080/data/${id}`
              );
              getData();
              alert("your data deletted")
          } catch (error) {
               console.log(error);
          }
     };

    // *******************patch Data***********************
    const patchData = async () => {
        try {
            let pres = await axios.patch(`http://localhost:8080/data/${updateId}`, data);
            getData();
        } catch (error) {
console.log(error);
        }
    }

    // *********************edit Data*********************

    const editData = (id) => {

        let selectId = value.find((item) => item.id === id);
        if (selectId) {
            setData(selectId);
            setUpdateId(id)
        }
    }



     // ************hendel submit******************
    function handelSubmit (e) {
        e.preventDefault();
        if (updateId) {

            patchData();
            setData(obj);
            alert("updat data")
            setUpdateId(null)
        } else {

            postData();
            setData(obj);
            alert("submit data")
        }



     }

     // ********************useEffect**********************
     useEffect(() => {
          getData();
     }, []);

     return (
          <div>
               <div className="main_form">
                    <form action="">
                         Name:-
                         <input
                              type="text"
                              name="name"
                              value={data.name}
                              onChange={userData}
                         />
                         <br />
                         <br />
                         Email:-
                         <input
                              type="email"
                              name="email"
                              value={data.email}
                              onChange={userData}
                         />
                         <br />
                         <br />
                         <button onClick={handelSubmit}>Submit</button>
                    </form>
               </div>

               <div className="main_table">
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
                                                       deleteData(item.id)
                                                  }>
                                                  delet
                                             </button>
                                             <button
                                                  onClick={() =>
                                                       editData(item.id)
                                                  }>
                                                  edit
                                             </button>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </div>
          </div>
     );
};

export default CurdEx;
