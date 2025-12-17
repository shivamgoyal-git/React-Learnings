import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("orange");

  // function changeColor(color) {                 //we can do it direcly without making a function call
  //   setColor(color);    
  // }
 

  return (
      <div
        className="mx-auto h-screen"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "
        >
          <div className="flex flex-wrap justify-center ">
            <button onClick={()=> {setColor("red")}}
            className="outline-none px-4 py-1 shadow-lg  rounded-full bg-white shadow-lg text-black text-xl font-bold hover:text-blue-500 " >
              Red
            </button>
            <button onClick={()=>{setColor('green')}}
            className="outline-none px-4 shadow-lg py-1 ml-2 rounded-full bg-white shadow-lg text-xl text-black font-bold hover:text-blue-500 " >
              Green
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;
