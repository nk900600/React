import React, {Component} from "react";
import axios from "axios"
export class PostForm extends Component{
    constructor() {
        super();


        this.state={
            userid: "",
            title: "",
            body: ""
        }
    }



    Handler=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
            }
        )
    }
    submithandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts" ,this.state)
            .then(response=>{
                console.log(response)
            }).catch(error=>{
            console.log(error)
        })
        // this.setState({
        //
        // })
    }

    render() {
        const {userid,title,body}=this.state;
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <div>
                        <input type="text" name="userid" value={userid}
                        onChange={this.Handler}/>
                    </div>
                     <div>
                        <input type="text" name="title" value={title} onChange={this.Handler}/>
                    </div>
                     <div>
                        <input type="text" name="body" value={body} onChange={this.Handler}/>
                    </div>
                    <button type="submit" > submit </button>
                </form>
            </div>
        );
    }
}