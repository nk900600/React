import React, {Component} from "react";

import axios from "axios"

class HttpRequest extends Component{
    constructor() {
        super();
        this.state={
            posts: []
        }
    }

    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => {
                this.setState({
                    posts: response.data
                })
                }).catch(error => {
                    console.log(error)
            }
        )
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                list of data {
                posts.length ?
                posts.map(post=> <div key={post.id} > { post.title} </div>) :
                    null
            }
            </div>
        );
    }
}


export default HttpRequest