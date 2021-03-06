import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '/home/sourya/Desktop/javascript/React-Demo/node_modules/bootstrap/dist/css/bootstrap.css'
import AddForm from './AddForm';


const App = () => {
  const [users, setUser] = useState([]);
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)
  // let flag = 0;

  
  useEffect(() => {
    getData();
  },[])

  async function getData() {
    const allData = await axios.get(`http://localhost:8080/getlist`)
    // console.log(allData);
    setUser(allData.data);
  }

  return (
    <>
      <table className="table table-dark">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">University</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((e) => (
              <tr key={e.id}>
                {/* {e.key = e.id} */}
                <th scope="col">{e.id}</th>
                <th scope="col">{e.name}</th>
                <th scope="col">{e.email}</th>
                <th scope="col">{e.universityName}</th>
                <th scope='col'> <button className="btn edit btn-outline-primary">Edit <i className="fa fa-edit" style={{ fontSize: "20px" }}></i></button></th>
                <th scope='col'> <button className="btn delete btn-outline-danger">Delete <i className="fa fa-trash-o" style={{ fontSize: "20px" }}></i></button></th>
              </tr>
            ))

          }
        </tbody>
      </table>

      <div className="text-center">
        <button onClick={onClick} className="btn delete btn-outline-success">Add New Student <i className="fa fa-plus-circle" style={{ fontSize: "20px" }}></i></button>
        { showResults ? <AddForm /> : null }
      </div>
      <div>
        
      </div>

    </>
  )
}

  

export default App;

