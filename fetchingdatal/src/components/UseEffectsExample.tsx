import { useEffect, useState } from "react";

const UseEffectsExample = () => {
  const [count, setCount] = useState(0);

  //UseEffect//In React the useEffect hook is used to manage side effects in functional components
  //fecthing data, manually update DOM, setting timers
  
  //useEffects takes in a callback function and takes in two arguments
  useEffect(() => {
    //This is the effect function. Code will run after every render.
    console.log('This text is');
    //Optional clean up function. Code here runs befire the component is unmounted or before the effects run again.
    // return () => {
    //     console.log('clean up function')
    // }
  }, [/*Dependecy Array*/])
    //What ever is in our [] is our dependency. It will take out useEffect fire every time this changes
    //If you privide an empty array[], the effect will only run once run after the inital render.

useEffect(() => {
console.log('This will run everytime our dependecy has ckhanged this count is ' , count)
    // setCount(count + 1)
}, [count])

useEffect(() => {
  console.log('Subscribe');

  return () => {
    console.log('Unsubscribe');
  }
}, [])



  //handle increament
  const handleIncreament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //handle derement
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1 className="text-center">UseEffect Example</h1>
      <div className="row">
        <div className="col-6 d-flex flex-column align-items-center">
          <p>Count: {count}</p>
          <div className="">
            <button
              className="btn btn-outline-primary mx-3 m-2"
              onClick={handleIncreament}
            >
              Increment
            </button>
            <button
              className="btn btn-outline-secondary mx-3 m-2"
              onClick={handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectsExample;
