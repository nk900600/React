import React, {Component} from "react";


export class HoverComponents extends Component {
    //
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         count:0
    //     }
    // }
    //
    // Handler =()=>{
    //   this.setState({
    //       count: this.state.count + 1
    //   })
    // };

    render()

    {    const {count , Handler} = this.props;
        return (
            // <button onClick={this.Handler}> clicked {count} Times </button>
            <h2 onMouseOver={Handler}>  hovered {count} Times </h2>
        );
    }

}



// export default HoverComponents