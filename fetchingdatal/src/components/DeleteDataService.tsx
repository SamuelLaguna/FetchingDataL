
// import axios from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/apiClient"
import userService, { User } from "../services/userService";
import useUsers from "../hooks/useUsers";
// interface User {
//   id: number;
//   name: string;
//   username: string;
// }

const DeleteDataService = () => {
  const {users,setUsers, error,setError,isLoading, setIsLoading} = useUsers();

  //Lets Create a helper function to helpnus delete our users from our front end UI 
  const userDelete = (user:User) => {
    setUsers(users.filter(u => u.id != user.id))
    const orginalUsers = [...users]
   userService.delete(user.id)
    .catch(error => {
      setError(error.message)
      setUsers(orginalUsers)
    })
  }

  return (
    <>
      <h1 className="text-center ">CRUD Delete</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button onClick={() => userDelete(user)} className="btn btn-outline-danger">Delete</button></li>
        ))}
        
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default DeleteDataService;
