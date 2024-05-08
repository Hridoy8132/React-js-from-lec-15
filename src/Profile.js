// Lec-18(Conditional Rendering | If Condition)
import React, { useState } from "react";

function Profile() {
  const [logIn, setLogIn] = useState(3);

//   if (logIn) {
//     return (
//       <div className="app">
//         <h1> Welcome to Our Website </h1>
//       </div>
//     );
//   } else {
//     return (
//       <div className="app">
//         <h1> Welcome to guest </h1>
//       </div>
//     );
//   }

// //// without if else condition how is it work:

        return(

         <div className="app">
              {/* {logIn?<h1> Welcome to Our Website </h1>: <h1> Welcome to guest </h1>}  */}
             
             {
              logIn==1?
              <h1> Welcome to Our Website 1 </h1>
              :logIn==2? <h1> Welcome to guest 2 </h1>
              :<h1> Welcome to guest 3 </h1>
            }

         </div>

        )
}

export default Profile;
