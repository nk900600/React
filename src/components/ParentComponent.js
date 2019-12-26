import React, {Component} from "react";
import ChildComponents from "./ChildComponents";
import PureComp from "./PureCompenent";
import Regularcomponent from "./regularcomponent";
import MemoComp from "./memoComp";

class ParentComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
            parentname: "parent"
        };
        // this.Greetparent= this.Greetparent.bind(this)
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                parentname: "parent"
            })
        },2000)
    }

    // Greetparent(ChildName){
    //     // features ion es6 not in react
    //     alert(`hello ${this.state.parentname} from ${ChildName}`)
    // }

    render() {
        console.log("parent")

        return (
            <div>

            {/*<ChildComponents greetHandler={this.Greetparent} />*/}
            {/*    <PureComp name={this.state.parentname} />*/}
                {/*<Regularcomponent name={this.state.parentname} />*/}
                <MemoComp name={this.state.parentname} />
            </div>


        )
    }

}



export default ParentComponent