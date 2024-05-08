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

// import React,{useState} from "react";

// function App()
// {
//   const [status,setStatus]=useState(false)
//   return (
//     <div className="app">

//       {
//         status? 
//         <h1> Hridoy Khan </h1>:null
//       }
        
//         <button onClick={()=>setStatus(false)}> Hide </button>
//             <button onClick={()=>setStatus(true)}> Show </button>

//         {/* <button onClick={()=>setStatus(!status)}> Toggle </button> */}
        
//     </div>

//   );
// }

// export default App;

// Lec-16  Close here ( Hide, Show and Toggle ).


//  ////// ///// Lec-17 Start here ( Handle form, Checkbox, Input field)

// import React,{useState} from "react";

// function App()
// {
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState("false");
//   const [interest,setInterest]=useState("");
//   function getFormData(e)
//   {
//     console.warn(name,tnc,interest)
//     e.preventDefault()
//   }
//   return(
//     <div className="app">
//       <h1> Handle form in React </h1>
//       <form onSubmit={getFormData}>
//         <input type="text" placeholder="Enter your name" value ={name} onChange={(e)=>setName(e.target.value)}/> 
//         <br/> <br/>

//         <select onChange={(e)=>setInterest(e.target.value)}>
//            <option> Select Options </option>
//            <option> Marvel  </option>
//            <option> DC </option>
//         </select>
//         <br/> <br/>

//         <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span> Accept Terms and Condition </span>
//         <br/> <br/>
//         <button type="submit"> Submit </button> 
//         <button type="clear"> Clear </button>

//       </form>
//     </div>



//   );
// }

// export default App;

////// ///// Lec-17 End here "( Handle form, Checkbox, Input field)

// //// Lec-18(Conditional Rendering | If Condition)

import React from "react";
import Profile from "./Profile";

function App()
{
  return(
    <div className="app">
      <Profile/>
    </div>

  );
}

export default App;