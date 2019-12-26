import React from "react";


function MemoComp(props) {
    console.log("memo")
    return(

        <div>
           yo {props.name}
        </div>
    )

}
export default React.memo(MemoComp)