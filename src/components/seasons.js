import React from "react";

// export function Seasons() {
//     window.navigator.geolocation.getCurrentPosition(
//
//         (position)=> console.log(position),
//         (err)=>console.log(err)
//
//
//     );
//
//     return(
//
//         <div>
//                 hi
//         </div>
//
//     )
//
// }
//
//
export class Seasons extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pos: null
        };
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState(
                {
                    pos: position.coords.latitude
                }
            ),
            positionError => console.log(positionError)
        );
    }


    render() {

        if (this.state.pos){
            return <div> lat : {this.state.pos} </div>
        }

        if (!this.state.pos){
            return <div> loading </div>
        }




            // return(
            //
            //
            //     <div>
            //         location: {this.state.pos}
            //     </div>
            // )
    }


}

// export default Seasons