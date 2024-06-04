import React, { useEffect, useState } from 'react'
import './curd.css'
import axios from "axios"




let startValue = {
    name: "",
    email: "",
    mobile:""
}
const Curd = () => {
    const [data, setData] = useState(startValue);
    const [value, setValue] = useState([]);
    const [updateId, setUpdateId] = useState(null);



    // ****************user data*************************
    const userData = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({
            ...pre,
            [name]: value,
        }))
    }





    // ************************get Data*********************

    const getData = async () => {
        try {
            let gres = await axios.get("http://localhost:8080/data");
            setValue(gres.data)
            console.log(gres.data);
        } catch (error) {
console.log(error);
        }
    }


    // *********************post Data**************************
    const postData = async() => {
        try {
            let pres = await axios.post("http://localhost:8080/data", data)
            setData(pres)
            getData();
        } catch (error) {
console.log(error);
        }
    }



    // ***************data delete************************

    const deleteData = async(id) =>{
        try {
            let dres = await axios.delete(`http://localhost:8080/data/${id}`);
            getData();
            alert("data deletted")
        } catch (error) {
console.log(error);
        }
    }


    // *************************patch data********************

    const patchData = async () => {
        try {
            let pres = await axios.patch(`http://localhost:8080/data/${updateId}`, data);
            getData();
        } catch (error) {
console.log(error);
        }
    }



    // ********************Edit data****************************

    const handelSubmit = (id)=>{
        const itemSelect = value.find((item) => item.id === id);
        if (itemSelect) {
            setData(itemSelect);
            setUpdateId(id)

        }
    }




    // *********************data Submit******************

    const userDataSubmited = async (e) => {
                 e.preventDefault();
        if (updateId) {
            patchData();
            alert("updatted")
            setData(startValue);
            setUpdateId(null)
        } else {
            postData();
            alert("added")
            setData(startValue)
        }

    }

    useEffect(() => {
        getData();
    },[])
  return (
       <div>
            <div className="form_cantaner">
                 <h1>Registration Form</h1>
                 <form>
                      <input
                           type="text"
                           placeholder="Enter your Namr"
                           name="name"
                           value={data.name}
                           onChange={userData}
                      />
                      <br />
                      <input
                           type="email"
                           placeholder="Enter your Email"
                           name="email"
                           value={data.email}
                           onChange={userData}
                      />
                      <br />
                      <input
                           type="text"
                           placeholder="Enter your Mobile Number"
                           name="mobile"
                           value={data.mobile}
                           onChange={userData}
                      />
                      <br />
                      <button onClick={userDataSubmited}>Submit</button>
                 </form>
            </div>

            <div className="table_cantaner">
                 <table border={1}>
                      <caption>Registration Data</caption>

                      <thead>
                           <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
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
                                          <td>{item.mobile}</td>
                                          <td>
                                               <div>
                                                    <button
                                                         onClick={() =>
                                                              handelSubmit(item.id)
                                                         }>
                                                         Edit
                                                    </button>
                                                    <button
                                                         onClick={() =>
                                                              deleteData(
                                                                   item.id
                                                              )
                                                         }>
                                                         Delete
                                                    </button>
                                               </div>
                                          </td>
                                     </tr>
                                );
                           })}
                      </tbody>
                 </table>
            </div>
       </div>
  );
}

export default Curd