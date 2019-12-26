
import React from 'react';


const Message = (props) => {
     return(
     <div>
     <h1>Hello { props.name }</h1>
          {props.children}
     </div>
     )
          };

// if we add export in front on greet then we canot chnag e
// the tag name
export default Message;
