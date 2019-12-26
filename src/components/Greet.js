
import React from 'react';


// eslint-disable-next-line no-unused-vars
// function TodoItmes() {
//   return (
//     <h3>todolist</h3>
//   );
// }

const Greet = ({name,children}) => {
     // const {name, heroname} = props//(this goes in fun params)
     return(
     <div>
     <h1>Hello { name }</h1>
          {children}
     </div>
     )
          };

// if we add export in front on greet then we canot chnag e
// the tag name
export default Greet;
