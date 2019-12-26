import React, {PureComponent} from "react";



class Refsdemo extends PureComponent{
    constructor(props) {
        super(props);

        this.inputRef=React.createRef();
        this.cbRef=null //call back approach old one
        this.setCbRef=(element)=> {
            this.cbRef=element
        }

    }

    componentDidMount() {
        // this.inputRef.current.focus();
        if (this.cbRef ){
        this.cbRef.focus()
        }

        // console.log(this.inputRef)
    }

    clickHandler =()=> {

        alert(this.inputRef.current.value)
    };
    render() {

        return (
            <div>
            <input type="text" ref={this.inputRef} />
            <input type="text" ref={this.setCbRef} />
            <button onClick={this.clickHandler}> click</button>
            </div>
        );
    }
}


export default Refsdemo