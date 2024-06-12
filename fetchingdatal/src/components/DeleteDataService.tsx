
import axios from "axios";
import { useEffect, useState } from "react";
// import apiClient, {CanceledError} from "../services/apiClient"
interface User {
  id: number;
  name: string;
  username: string;
}

const DeleteDataService = () => {
  //We need a useState to help us hold the state of our users
  const [users, setUsers] = useState<User[]>([]);

  //Create a function to helps us fetch our data with axios

  //UseState to help use handle errors
  const [error, setError] = useState("");
 const [isLoading, setIsLoading] = useState(false)

  const FetchData = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)
        setIsLoading(false);
      } )
      .catch((error) => {
        setError(error.message)
        setIsLoading(false);
      } );
  };

  //UseEffect to help us with our fecthing data
  useEffect(() => {
    FetchData();
  }, []);

  //Lets Create a helper function to helpnus delete our users from our front end UI 
  const userDelete = (user:User) => {
    setUsers(users.filter(u => u.id != user.id))
  }

  return (
    <>
      <h1 className="text-center ">CRUD Delete</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.username} <button onClick={() => userDelete(user)} className="btn btn-outline-danger">Delete</button></li>
        ))}
        
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default DeleteDataService;
