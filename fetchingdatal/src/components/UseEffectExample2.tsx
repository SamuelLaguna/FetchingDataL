import { useEffect, useRef } from "react"


const UseEffectExample2 = () => {
    const ref = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        
        if(ref.current) ref.current.focus()
        
         
        }, [])

        useEffect(() => {
          
        
          return () => {
          document.title = "This is cool."
          }
        }, [])
        
        
  return (
   <>
   <h1 className="text-center">UseEffectExample2</h1>
   <input ref={ref} className="form-control" type="text"/>

   </>
  )
}

export default UseEffectExample2
