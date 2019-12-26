import React from "react";

import '../css/Stylesheet.css'



function StyleSheet(props) {
    let className= props.primary ? "primary": "";
    return(

        <div>
        <h1 className={`${className} font-xl`}> Stylesheet</h1>
        </div>
    )
}


export default StyleSheet