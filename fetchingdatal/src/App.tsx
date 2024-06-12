import { useState } from "react"
import ProductList from "./components/ProductList"
import UseEffectExample2 from "./components/UseEffectExample2"
import UseEffectsExample from "./components/UseEffectsExample"
import FetchingAxios from "./components/FetchingAxios"
import FetchingWFetch from "./components/FetchingWFetch"
import AsyncAwait from "./components/AsyncAwait"
import LoadingIndicator from "./components/LoadingIndicator"
import DeleteData from "./components/DeleteData"
import CreateData from "./components/CreateData"
import UpdateData from "./components/UpdateData"

const App = () => {
  const [category, setCategory] = useState('')
  return (
  <>
  <h1 className="text-center">React Fetching Data Examples, Using Axios, services, HTTP, CRUD</h1>
  <UpdateData/>
  {/* <CreateData/> */}
  {/* <DeleteData/> */}
  {/* <AsyncAwait/> */}
  {/* <LoadingIndicator/> */}
  {/* <FetchingWFetch/> */}
  {/* <FetchingAxios/> */}
  {/* <UseEffectsExample/> */}
  {/* <UseEffectExample2/> */}
  {/* <ProductList category={category}/>
  <div>
    <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
      <option value=''></option>
      <option value='Clothing'>Clothing</option>
      <option value='HouseHold'>HouseHold</option>
    </select>
  </div> */}
  </>
  )
}

export default App