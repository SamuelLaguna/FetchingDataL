import axios from "axios"
import { useEffect, useState } from "react";

interface User {
    id:number,
    name:string
    
}

const FetchingAxios = () => {

    //We need a useState to help us hold the state of our users
    const [users, setUsers] = useState<User[]>([])

    //Create a function to helps us fetch our data with axios

    //UseState to help use handle errors
   const [error, setError] = useState('')
    // const FetchData = () => {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(response => setUsers(response.data));
        
    // }

 const FetchData = () => {
    axios
    //request
    .get("https://jsonplaceholder.typicode.com/users")
    //Handles Response
    .then((response) => setUsers(response.data))
    //Handles errors
    .catch(error => setError(error.message))
 }


   
    
    //UseEffect o help us with our fecthing data
    //Need useEffect to fetch the data 
    useEffect(() => {
        FetchData();
        
        
      
    }, [])
    
  return (
    <>
    <h1 className="text-center">Fetching Data With Axios</h1>
    <ul>
        {/* //Map tells it to go threw every single user and display them over */}
        {users.map(user => (<li key={user.id}>{user.name}</li>
    
    ))}
    {error && <p className="text-danger">{error}</p>}
        
    </ul>
    </>
  )
}

export default FetchingAxios