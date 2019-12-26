import React, {Component} from "react";
import ForwardRefInput from "./Forwardrefinput";


class ForwardRefParentInput extends Component{
    constructor(props) {
        super(props);
        this.inputRef= React.createRef()
    }




    render() {
        return (
            <div>
                <ForwardRefInput ref={this.inputRef}/>
                <button> focus input </button>
            </div>
        );
    }
}
export default ForwardRefParentInput