// // lec-15 Get Input box value
// import './App.css';
// import React,{useState} from 'react';

// function App() {
// const [data,setData]=useState(null) 
// const [print,setPrint]=useState(false) 

//   function getData(val)
//   {
//     console.warn(val.target.value)
//     setData(val.target.value)
//     setPrint (false)
//   }
//   return (
//     <div className="App">
//       {
//         print?
//         <h1> {data} </h1>
//         :null
//       }
       
//       <input type ="text" onChange={getData}/>
//       <button onClick={()=>setPrint(true)}> Print Data </button>
      
//     </div>
//   );
// }

// export default App;



// Lec-16  Start here ( Hide, Show and Toggle ).

import React,{useState} from "react";

function App()
{
  const [status,setStatus]=useState(false)
  return (
    <div className="app">

      {
        status? 
        <h1> Hridoy Khan </h1>:null
      }
        
        <button onClick={()=>setStatus(false)}> Hide </button>
            <button onClick={()=>setStatus(true)}> Show </button>

        {/* <button onClick={()=>setStatus(!status)}> Toggle </button> */}
        
    </div>

  );
}

export default App;

// Lec-16  Close here ( Hide, Show and Toggle ).
