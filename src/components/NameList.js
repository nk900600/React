import React from "react";
import Person from "./Person";



function NameList() {
    const names= [

    {
            id:1,
            name:"nikhil",


    }];

    const namelist =  names.map(name => <Person key={name.id} name={name}> </Person>);

    return(

        <div>
            {
                namelist
            }
            </div>

    )

}


export default NameList