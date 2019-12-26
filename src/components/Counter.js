import React, { Component } from "react";


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    Increase () {
        // this.setState(
        //     {  // this is call back
        //         count: this.state.count + 1
        //     }
        // )
        // this is aschronous file
        this.setState(
            (prevstate) => ({
                count: prevstate.count +1
            })
        )

    }

    Increment5 (){
        this.Increase();
        this.Increase();
        this.Increase();
        this.Increase();
    }
    render() {
        return(
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.Increment5()}> Increment </button>
        </div>

        )

    }


}


export default Counter