
import React, {Component} from "react";
import {connect} from "react-redux";
import {FetchPost} from "../actions/fetchPosts";
import UserHeader from './postList2'

class PostList extends Component {

    componentDidMount() {

        this.props.FetchPost();

    }

    renderList(){
        return this.props.post.map((post)=>{
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2> {post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            )
        })
    }


    render() {
        console.log(this.props.post);
        return(
            <div className="ui relaxed divided list">
              {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {post:state.posts}
};

export default connect(mapStateToProps,{FetchPost})(PostList)