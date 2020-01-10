import React, {Component} from "react";

import {connect} from "react-redux";
import {FetchUser} from "../actions/fetchPosts"

class UserHeader extends Component{
    // constructor() {
    //     super();
    // }

    componentDidMount() {
        this.props.FetchUser(this.props.userId);
    }

    render() {
        // this is first method


        // const user= this.props.users.find(user=> user.id ===this.props.userId);
        // if (!user){
        //     return null;
        // }``
        // console.log(this.props.user);


        // this is second type
        const { user }= this.props;
        if (!user){
            return null;
        }
        return (
            <div className="header">
               { user.name}
            </div>
        );
    }

}

// const mapStateToProp=(state) => {
//
//     return {users:state.users}
// };


// other way to do it and remove render const is below

const mapStateToProp=(state,ownProps)=>{

    return {user: state.users.find(user=> user.id===ownProps.userId)};

};

export default connect(mapStateToProp,{FetchUser})(UserHeader)


