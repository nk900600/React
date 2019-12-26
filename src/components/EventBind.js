import React, {Component} from "react";



class EventBind extends Component{
    constructor() {
        super();
        this.state={
            message:"hello"
        };
        // this.Click=this.Click.bind(this) another
    }

    Click() {
        this.setState({   //this keyword is undefined
            message: "good bye"
            }
        )
    }

    render() {
        return(
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={this.Click.bind(this)}> Event Click </button>
                {/*<button onClick={() => this.Click()}> Event Click </button>*/}
            </div>
        )
    }
}

export default EventBind