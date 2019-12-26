import React from "react";

const WithCounter = WrapperComponent => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                count:0
            }
    }

    Handler =()=>{
      this.setState({
          count: this.state.count + 1
      })
    };
        render() {
            return (
                <WrapperComponent name="nikhil"
                count={this.state.count}
                handler={this.Handler}
                    {... this.props }
                />
            );
        }
    }
    return WithCounter
};

export default WithCounter