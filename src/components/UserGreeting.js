import React, {Component} from "react";


class UserGreeting extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoggedin: true
        }
    }

    render() {

        // in this condition is true the print else empty page
        return this.state.isLoggedin && <div>Welcome Vishwas </div>


// ternary
        // return this.state.isLoggedin ?
        //     <div>welcomw nikhil</div>:
        //     <div>welcome guest</div>



// element variable
        // let message;
        // if (this.state.isLoggedin){
        //     message= <div>welcome nikhil</div>
        // }
        // else{
        //     message= <div>welcome guest</div>
        // }
        // return <div>{message}</div>
// if else
        // if (this.state.isLoggedin){
        //     return <div>welcome nikhil</div>
        // }
        // else{
        //     return <div>welcome guest</div>
        // }


        // return (
        //     <div>
        //     <div>welcome User</div>
        //     <div>welcome guest</div>
        //         </div>
        // )
    }


}

export default UserGreeting