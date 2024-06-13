
// import axios from "axios";
import { useEffect, useState } from "react";
// import apiClient from "../services/apiClient"
import userService from "../services/userService";
import useUsers from "../hooks/useUsers";

const CreateDataService = () => {
   const {users,setUsers, error,setError,isLoading, setIsLoading} = useUsers();
   
//create a helper function to help us delete our users
const addUser = () => {
    //new object with an id and a name:
    const newUser = {id: 0, name: 'Aarron'}

    const originalUser = [...users]
    //set our users and spread all users and add our new users
    setUsers([newUser,...users])
    //we need to send this updated data to our back-end
   userService.create(newUser)
    .then(response => setUsers([response.data,...users]))
    .catch(error => {
        setError(error.message)
        setUsers(originalUser)
    })
}
  return (
    <>
    <h1 className="text-center">CRUD Create with Axios</h1>
    <button className="btn btn-primary mx-3 mb-3" onClick={addUser}>Add</button>
    <ul className="list-group">
        {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button className="btn btn-outline-danger">Delete</button></li>)}
        {error && <p className="text-danger">{error}</p>}
        { isLoading && <div className="spinner-border"></div>}
    </ul>
    </>
  )
}
export default CreateDataService









