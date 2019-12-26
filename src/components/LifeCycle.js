import React, {Component} from "react";
import LifeCycleb from "./LifeCycleb";

class LifeCycle extends  Component{

    constructor() {
        super();

        this.state={

            name: "Nikhil"
        };

        console.log("lifecycle a")
    }


    static getDerivedStateFromProps(props,state){

        console.log("lifecycle a from static ");
        return null

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("lifecycle a should component update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("lifecycle a getsnapshotbeforeupdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("lifecycel a didupdate")

    }


    componentDidMount() {

        console.log("lifecycle from  a compentmount")
    }

    chnageState =() => {
        this.setState(
            {
                name: "pankaj"
            }
        )
    };


    render() {
        console.log("lifecycle a from render ");
        return(

            <div>

            LIFECYCLE A
                <button onClick={this.chnageState}> change state </button>
                <LifeCycleb />

            </div>

        )
    }


}


export default LifeCycle