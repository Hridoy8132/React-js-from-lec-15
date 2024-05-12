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

// import React from "react";
// import Profile from "./Profile";

// function App()
// {
//   return(
//     <div className="app">
//       <Profile/>
//     </div>

//   );
// }

// export default App;

// // Lec 19 start here  Basic form Validation

// import Login from './Login'

// function App() {

//   // const data = true;
//   return(
//     <div className="app">
//       <Login/>
//     </div>

//   );
// }

// export default App;

// // Lec 19 end Basic form Validation

// /// Lec 20 start ( Pass Function as Props)

// import React from "react";
// import User from "./User";
// import Members from "./Members";
// function App() {
//   function getData()
//   {
//     alert("hello from app")
//   }

//   return(
//     <div className="App">
//       <User data={getData}/>
//       <div>
//         <Members data={getData}/>
//       </div>
//     </div>

//   );
// }

// export default App;

// /// Lec 20 End here (Pass Function as Props)

// /// L-29 UseEffect Hook

// import './App.css';
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.warn("use effect")
//   })
//   return (
//     <div className="App">
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;

// /// L-29 Ends here UseEffect Hook

// lecture -34 start here List with Bootstrap table

import React from "react";
import { Table } from "react-bootstrap";
function App() {
  const users = [
    { name: "Anil", email: "anil@test.com", contact: "111" },
    { name: "Burce", email: "bruce@test.com", contact: "222" },
    { name: "Peter", email: "peter@test.com", contact: "111" },
    { name: "Sam", email: "sam@test.com", contact: "777" },
  ];
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped variant="dark">
        
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contacts</td>
          </tr>
         { 
          users.map((item, i) =>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
            ) 
          }   

          {/*kono specific contact find korte bolow code ta korte hobe
            users.map((item, i) => 
            item.contact === '111' ?  
            </tr>:null  */}

        </tbody>
      </Table>
    </div>
  );
}

export default App;

// lecture -34 end here List with Bootstrap table
