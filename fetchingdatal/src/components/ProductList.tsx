import { useEffect, useState } from "react"

    // interface CatergoryProps {
    //     category: string
    // }
    //Works this way to
const ProductList = ({category}:{category:string}) => {
    const [product, setProduct] = useState<string[]>([])

    useEffect(() => {
     console.log('Fetching Product in', category);
     setProduct(['Clothing', 'HouseHold'])
     
   
    }, [category])
    

  return (
   <>
   <h1 className="text-center">Product List</h1>
   <p>{product}</p>
   </>
  )
}

export default ProductList