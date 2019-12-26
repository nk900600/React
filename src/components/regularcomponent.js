import React, {Component} from "react";
import ChildParentref from "./ChildParentref";



class Regularcomponent extends Component{
    constructor() {
        super();
        this.parent= React.createRef()
    }

    Handler= () => {

    this.parent.current.onfocus()
    }

    render() {
         // console.log("regular")
        return (
            <div>
                <ChildParentref ref={this.parent}/>
                <button onClick={this.Handler}> focus input</button>

            {/*regular compenent {this.props.name}*/}
            </div>
        );
    }
}


export default Regularcomponent