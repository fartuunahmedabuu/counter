import { useState } from "react"

function Tasbiix (){

    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDescrement = () => {
  
    if(count > 0){
      setCount (count -1)
    }
  }

  const handleRest = () => {
    setCount(0);
  };
       

    return <div className="text-center mt-[100px] ">
        <h1 className="text-4xl mb-10">{count}</h1>
        <button onClick={handleIncrement} className="bg-yellow-500 px-6 py-3 rounded text-white m-3 text-3xl">Increment</button>
        <button onClick={handleRest} className="bg-blue-500 text-white px-6 py-3 rounded m-3 text-3xl">Rest</button>
        <button onClick={handleDescrement} className="bg-black px-6 py-3 text-white rounded m-3 text-3xl">Descrement</button>
    </div>
}

export default Tasbiix