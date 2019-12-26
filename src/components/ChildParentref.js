import React, {Component} from "react";



class ChildParentref extends Component{

    constructor() {
        super();
        this.childRef= React.createRef()

    }

    onfocus (){
        this.childRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref ={this.childRef}/>
            </div>
        );
    }

}

export default ChildParentref