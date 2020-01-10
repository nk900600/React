import React, {Component} from "react";
import axios from "axios";
// import unsplash from "../api/unsplash";
import {Controlled} from "./Controlled";
import {Image} from "./images";


export class Http extends Component{

    state= {images: []};

    onSubmit=async (term)=>{

        const response=await axios.get("http://api.unsplash.com/search/photos",{
            params: {query:term},
            headers: {
                Authorization :
                    'Client-ID 4641f9893bbb26bdff91caa92748740769a2a90b4595413e639a77e8485cbdbf'
            }

        });
        // console.log(response.data.results)
        this.setState({images:response.data.results})

        //     .then((response)=>{
        //     console.log(response.data.results)
        //
        // })

    };

    render() {
        return(

            <div>
                <Controlled onSubmit={this.onSubmit} />
                found : {this.state.images.length}
                <Image ima={this.state.images}/>
            </div>
        )
    }

}