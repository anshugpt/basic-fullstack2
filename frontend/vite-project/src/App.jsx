import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"



function App() {
  const [user, setUser] = useState([])

 

  useEffect( () => {
    axios.get("/api/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }); 

  return (
    <>
      <h1>User data by Anshu</h1>
      <p>Number of users: {user.length}</p>

      {user.map((u) => ( 
        <div key={u.id}>
          <p>Name: {u.name}</p>
          <p>Age: {u.age}</p>
        </div>
      ))}
    </>
  )
}

export default App

