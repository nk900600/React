import React, {Component} from "react";
import {connect} from "react-redux";


const SongDetails=props=>{
    console.log(props);
         return(
            <div>
                song Details
            </div>
        )
    };

const mapStateToProps = (state) => {
    // console.log(state);
   return  { song : state.selctedSong}
};



export default connect(mapStateToProps)(SongDetails)