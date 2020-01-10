import React from "react";

import {combineReducers} from "redux";

const postReducer = (state = [],action)=>{
    if (action.type==='FETCH_POSTS'){
        return action.payload
    }
    return state
};

const userReducer = (state=[],action)=>{
    if (action.type==='FETCH_USERS'){
        return [...state,action.payload]
    }
    return state
};






export default combineReducers(
    {
        posts : postReducer,
        users : userReducer
    }
)