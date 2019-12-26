import React, {Component} from "react";


export class RenderCounter extends Component{

    constructor() {
        super();
        this.state={
            count:0
        }
    }

    Handler=()=> {
        this.setState(prevstate =>{
            return  { count : prevstate.count + 1 }
        })
    };

    render() {
        // const {count} = this.state ;
        return (
            <div>
                {/*<button onClick={this.Handler}> click me {count} </button>*/}
                {this.props.render(this.state.count,this.Handler)}
             </div>

        );
    }

}