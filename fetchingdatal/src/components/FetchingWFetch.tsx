import { useEffect, useState } from "react"


interface User {
    id: number
    name:string
}

const FetchingWFetch = () => {
    const [user, setUser] = useState<User[]>([])

    

   
    //We need a useEffect to render our data once our fetchingFetch component loads, no depedency in the array, no clean up the function
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data)
        )
        
      
      
    }, [])
    

  return (
<>
    <h1 className="text-center">Fetching Data using fetch</h1>
    <div>
        <ul>
            {user.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
</>
  )
}

export default FetchingWFetch