import apiClient from "./apiClient";

interface Entity {
    id:number;
}

//Create a class and a method 
class HttpService {

    //type string endpoint
    endpoint: string;
    //need a contructer any time you call the class it will create instance of that class.
    //ehat ever is in our contructer it will create a instance
    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    //Lets create a get all user method 
    getAll<T>() {
        const request = apiClient.get<T[]>(this.endpoint );
            return{request}
        
    }

    //Delete User method 
    delete(id: number){
       return apiClient.delete( this.endpoint + '/' + id)
    }

    //Add User Method
    create<T>(entitiy: T){
       return apiClient.post( this.endpoint + '/', entitiy)
    }

    //update user Method 
    update<T extends Entity>(entitiy: T){
        return  apiClient.put(this.endpoint + "/" + entitiy.id,entitiy)
    }

}

const create = (endpoint: string) => new HttpService(endpoint)

export default create;