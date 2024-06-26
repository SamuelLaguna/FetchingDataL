import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
}

const LoadingIndicator = () => {
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

  return (
    <>
      <h1 className="text-center">Fetching Data With Axios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </>
  );
};

export default LoadingIndicator;
