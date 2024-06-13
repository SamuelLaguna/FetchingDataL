
import axios from "axios";
import { useEffect, useState } from "react";
import apiClient, {CanceledError} from "../services/apiClient"
import userService, { User } from "../services/userService";
import useUsers from "../hooks/useUsers";

const UpdateDataService = () => {
  const {users,setUsers, error,setError,isLoading, setIsLoading} = useUsers();

  const updateUser = (user: User) => {
    const updateUser = { ...user, name: user.name + "+" };
    const originalUser = [...users];
    setUsers(users.map((u) => (u.id === user.id ? updateUser : u)));
      userService.update(updateUser)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUser);
      });
  };

  return (
    <>
      <h1 className="text-center">Update Create with Axios</h1>

      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <button
              onClick={() => updateUser(user)}
              className="btn btn-outline-danger"
            >
              Update User
            </button>
          </li>
        ))}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};
export default UpdateDataService;



