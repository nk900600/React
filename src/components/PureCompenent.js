import React, {PureComponent} from "react";



class PureComp extends PureComponent{


    render() {
         console.log("Purecompenet")
        return (
            <div>
            pure compenent {this.props.name}
            </div>
        );
    }
}


export default PureComp