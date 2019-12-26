
import React, { Component } from 'react';


class Welcome extends Component{
    constructor() {
        super();
        this.state={
            message:"welcome nikhil"
        }
    }

    changeMessage() {
        this.setState(
            {
                message:"thankyou for subscribing"
            }
        )
    }

    render() {
        //const {name,heroname} = this.props
        // const {state1 , state2} = this.state

        return(
            <div>
            <h1>  {this.state.message}</h1>
            <button onClick={ () => this.changeMessage() }> Subscribe</button>
            </div>


        )
    }
}

export default Welcome