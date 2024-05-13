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

// import React from "react";
// import { Table } from "react-bootstrap";
// function App() {
//   const users = [
//     { name: "Anil", email: "anil@test.com", contact: "111" },
//     { name: "Burce", email: "bruce@test.com", contact: "222" },
//     { name: "Peter", email: "peter@test.com", contact: "111" },
//     { name: "Sam", email: "sam@test.com", contact: "777" },
//   ];
//   return (
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       <Table striped variant="dark">

//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contacts</td>
//           </tr>
//          {
//           users.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.contact}</td>
//               </tr>
//             )
//           }

//           {/*kono specific contact find korte bolow code ta korte hobe
//             users.map((item, i) =>
//             item.contact === '111' ?
//             </tr>:null  */}

//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default App;

// lecture -34 end here List with Bootstrap table

// / Lec-35 start Nested list with multidimension in Array:

// import './App.css';
// import React from 'react'
// import { Table } from 'react-bootstrap'
// function App() {
//   const users = [
//     {
//       name: 'Anil', email: 'anil@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//   ]
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark"  >
//         <tbody>
//           <tr>
//           <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {
//             users.map((item,i)=>
//             <tr key={i}>
//                <td>{i+1}</td>
//             <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>
//               {/*  */}
//               <Table variant="dark"  >
//         <tbody>
//               {
//                 item.address.map((data)=>

//                 <tr>
//                   <td>{data.hm}</td>
//                   <td>{data.city}</td>
//                   <td>{data.country}</td>
//                 </tr>
//                 )
//               }
//               </tbody>
//               </Table>
//               {/*  */}
//             </td>
//           </tr>
//           )
//           }
//         </tbody>
//       </Table>

//     </div>
//   );
// }

// export default App;

// / Lec-35 end Nested list with multidimension in Array:

// /// Lec-37 Stat Fragments in ReactJs

// import './App.css';
// import React from 'react'
// import Cols from './Cols'
// function App() {
//   return (
//     <>
//       <h1>React Fragment</h1>
//      <table>
//        <tbody>
//          <tr>
//           <Cols />

//          </tr>
//        </tbody>
//      </table>
//       </>

//   );
// }

// export default App;

// /// Lec-37 End Fragments in ReactJs

// // Lec-38 Start Send Data Child to Parent Component.

// import React from 'react'
// import './App.css';
// import User from './Lec-38';
// function App() {
//   function getName(name)
//   {
//     alert(name)
//   }
//   return (
//     <div className="App">
//       <h1>Lifting State Up</h1>
//       <User getData={getName} />
//     </div>
//   );
// }

// export default App;

// Lec-38 End Send Data Child to Parent Component.

// Lec- 39 start Pure component using class:

// import './App.css';
// import React,{PureComponent} from 'react'
// import Counter from './Lec-39';
// class  App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//  render()
//  {
//   return (
//     <div className="App">
//      <Counter count={this.state.count} />
//       <button
//       onClick={()=>{this.setState({count:this.state.count+1})}}
//       >Update Count</button>
//     </div>
//   );
//  }
// }

// export default App;

// Lec- 39 end Pure component using class:

// Lec- 40 start UseMemo Hook in Reactjs.

// import './App.css';
// import React, { useState, useMemo } from 'react'
// function App() {
//   const [count, setData] = useState(0)
//   const [item, setItem] = useState(10)

//   const newApple=useMemo(
//     function multiCount() {
//       console.warn("multiCount")
//       return count * 5 ;
//     }
//   ,[count])
//   return (
//     <div className="App">
//       <h1>Hooks in React </h1>
//       <h2> Count :{count} </h2>
//       <h2> Item :{item} </h2>
//       {newApple}
//       <button onClick={() => setData(count + 1)}>Update Count </button>
//       <button onClick={() => setItem(item * 10)}>Update Item </button>

//     </div>
//   );
// }

// export default App;

// Lec- 40 End UseMemo Hook in Reactjs.

// // Lec-41 start Ref in React js using class component:

// import './App.css';
// import React,{createRef} from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.inputRef=createRef();
//   }
//   componentDidMount()
//   {
//     // console.warn(this.inputRef.current.value="1000")
//   }
//   getVal()
//   {
//     console.warn(this.inputRef.current.value)
//     this.inputRef.current.style.color="red"
//     this.inputRef.current.style.backgroundColor="black"

//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Ref in React </h1>
//         <input type="text" ref={this.inputRef}  />
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     );
//   }
// }

// export default App;

// Lec-41 end Ref in React js using class component:

// // // Lec-42 start UseRef in React
// import React,{useRef} from 'react'
// function App() {
//   let inputRef=useRef(null);
//   function controlInput()
//   {
//   // inputRef.current.value="abc"
//   // inputRef.current.style.display="none"
//   // inputRef.current.focus()
//   inputRef.current.style.color="red"

//   }
//   return (
//     <div className="App">
//       <h1>useRef in React </h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={controlInput}>Handle Input</button>
//     </div>
//   );

// }

// export default App;

// // Lec-42 end UseRef in React

// // Lec-43 Start forwardRef in Reactjs

// import "./App.css";
// import React, { useRef } from "react";
// import User from "./lec-43-forwardRef";
// function App() {
//   let inputRef = useRef(null);
//   function updateInput() {
//     inputRef.current.value = "1000";
//     inputRef.current.style.color = "red";
//     inputRef.current.focus();
//   }
//   return (
//     <div className="App">
//       <h1>forwardRef in React </h1>
//       <User ref={inputRef} />
//       <button onClick={updateInput}>Update Input Box</button>
//     </div>
//   );
// }
// export default App;

// // Lec-43 End forwardRef in Reactjs

// // Lec-44 Controlled Component


import './App.css';
import React,{useState} from 'react'
function App() {
  let [val,setVal]=useState("")
  let [item,setItem]=useState("")

   return (
    <div className="App">
      <h1>Controlled Component </h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
      <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
   <h2>{val}</h2>
   <h2>{item}</h2>
    </div>
  );

}
export default  App;

