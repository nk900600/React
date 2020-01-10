import React from "react";

export const Image=(props) => {
    console.log(props);
    const p=props.ima.map(n=>{
       return <img src={n.urls.regular} />
    });
    return <div> {p} </div>

};