import React, {Component} from "react";

class LifeCycleb extends  Component{

    constructor() {
        super();

        this.state={

            name: "Nikhil"
        };

        console.log("lifecycle b")
    }


    static getDerivedStateFromProps(props,state){

        console.log("lifecycle b from static ");
        return null


    }

    componentDidMount() {

        console.log("lifecycle b from compentmount")
    }


     shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("lifecycle b should component update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("lifecycle b getsnapshotbeforeupdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("lifecycel b didupdate")

    }
    render() {
        console.log("lifecycle b from render ");
        return(

            <div>

            LIFECYCLE b

            </div>

        )
    }


}


export default LifeCycleb