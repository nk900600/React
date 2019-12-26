import React, {Component} from "react";


export class Errorhandling extends Component{

    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError){
            return  <h1> error</h1>
        }
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}