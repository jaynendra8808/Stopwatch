import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [time, setTime] = useState(0);
  const [runing, setRuning] = useState(false)

  useEffect(() => {
    let interval;
    if(runing) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    }
    else if(! runing) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [runing])
  
  return (
    <>
     <div className="flex flex-col justify-center text-center bg-red-400 w-[250px] h-[130px] mx-auto mt-[250px] rounded-xl ">
      <div className="text-2xl font-bold mb-2">01-Stopwatch</div>
      <div className="mb-2">
        <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time/10) % 100)).slice(-2)}</span>
      </div>
      <div className="mb-2">
          {runing ?
            <button onClick={() => setRuning(false)}  className="bg-gray-900 text-white rounded-2xl mr-4 px-2 pb-1">Stop</button>
            : 
            <button onClick={() => setRuning(true)} className="bg-gray-900 text-white rounded-2xl mr-4 px-2 pb-1">Start</button>
          }
        <button onClick={() => setTime(0)} className="bg-gray-900 text-white rounded-2xl ml-4 px-2 pb-1">Reset</button>
      </div>
     </div>
    </>
  )
}

export default App
