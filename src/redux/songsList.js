import React, {Component} from "react";
import {selectSongs} from '../actions';
import {connect } from 'react-redux'
import { selectSong } from '../actions'
import songDetails from "./songDetails";


class Songs extends Component{
    constructor() {
        super();
    }


    renderList(){

        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={()=> this.props.selectSong(song)}
                        >
                            select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render() {

        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log(state.songs);
    return {
        songs: state.songs
    };
  // console.log(state);

};

export default connect(mapStateToProps,{selectSong})(Songs)