
import axios from "axios";
import { useEffect, useState } from "react";
import apiClient, {CanceledError} from "../services/apiClient"
import userService from "../services/userService";
interface User {
  id: number;
  name: string;
}
const UpdateDataService = () => {
  //we need a useState to help us hold the state of our users
  const [users, setUsers] = useState<User[]>([]);
  //useState to help use handle errors
  const [error, setError] = useState("");
  //useState for loading indicator
  const [isLoading, setIsLoading] = useState(false);
  //create a function to help us fetch our data w/ axios
  const FetchData = () => {
    setIsLoading(true);
    //added x before users to create an error
    const {request} = userService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };
  //useEffect to help us with our FetchData
  useEffect(() => {
    FetchData();
  }, []);

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



