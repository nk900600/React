import React, {Component} from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import {Controlled} from "./Controlled";


export class Images extends Component{

    state= {images: []};

    onSubmit=async term=>{

        const response=await unsplash.get('/search/photos',{
            params: {query:term}

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
            </div>
        )
    }

}