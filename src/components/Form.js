
import React, {Component} from "react";


class Form extends Component{

    constructor() {
        super();
        this.state={
            username:"",
            password:""
        }
    }

    handelUsername = (event) => {
        this.setState({
            username: event.target.value,


        });
        console.log(event.target.value)
    };

     handelUserpass = (event) => {
     this.setState({

         password:event.target.value
           // console.log(this.state.password)

     });
         console.log(event.target.value)

    };

     handelSubmit = event =>{
         console.log(this.state)
         alert(` ${this.state.username} ${this.state.password}`)

         // alert(` $(this.state.username) $(this.state.password)`)
     };

    render() {
        return(
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label> Username </label>
                        <input type="text"
                               value={this.state.username}
                                onChange={this.handelUsername}
                        />
                </div>
                <div>
                    <label> Password </label>
                        <input type="password"
                               value={this.state.password}
                                onChange={this.handelUserpass}
                        />
                </div>
                <button type="submit"> Submit </button>
            </form>

        )
    }
}


export default Form