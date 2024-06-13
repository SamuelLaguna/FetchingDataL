import { useEffect, useState } from "react";
import userService, {User} from "../services/userService";
const useUsers = () => {
    const [user, setUsers] = useState<User[]>([]);
    //useState to help use handle errors
    const [error, setError] = useState('')
    //useState for loading indicator
    const [isLoading, setIsLoading] = useState(false);
    //create a function to help us fetch our data w/ axios
    const FetchData = () => {
        setIsLoading(true);
        //added x before users to create an error
         const {request} = userService.getAll<User>()
         request
        .then(response => {
        setUsers(response.data)
        setIsLoading(false);
        })
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        } )
    }
    //useEffect to help us with our FetchData
    useEffect(() => {
        FetchData();
    }, [])

    return {user, setUsers, error, setError,}
}

export default useUsers;