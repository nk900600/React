import React,{ Component} from "react";

class ChildComponents extends Component{

    // constructor(props) {
    //     super(props);
    //
    
    // }
    render() {

        return(

            <div>
                <button onClick={() => this.props.greetHandler("child")}> Greet parent </button>
            </div>

        )
    }
}


// function ChildComponents (props) {
//
//
//     return(
//         <div>
//              <button onClick={() => props.greetHandler("child" )}> Greet parent </button>
//         </div>
//
//
//
//     )
//
//
//
// }


export default ChildComponents