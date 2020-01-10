import {selectSongs} from "../actions";
import { combineReducers } from 'redux';

const songsReducers = () =>{

    return[
        {
            title: "demons",
            duration : '5:00'
        },
        {
            title: "radioactive",
            duration : '5:00'
        },
        {
            title: "demons",
            duration : '5:00'
        }
    ];
};

const selectedSongReducer = (selectSongs=null,action)=>{

    if (action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectSongs;
};


export default combineReducers({

    songs:songsReducers,
    selctedSong: selectedSongReducer

});