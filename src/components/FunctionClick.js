import React, {Component} from "react";



class FunctionClick extends Component{
    // constructor() {
    //     super();
    // }

    Fun (){

        console.log("yo")

    }

    render() {
        return (

            <div>
                <button onClick={this.Fun}> Click me </button>

            </div>
        )
    }


}
export default FunctionClick