import React from "react";



export function CommentDetail(props) {
    return(
        <div className="ui container comments">
          <div className="comment">
              <a href="/" className="avatar">
                  <img alt="avatar" />
              </a>
              <div className="content">
                  <a herf="/" className="author">
                     {props.name}
                  </a>
                  <div className="metadata">
                      <span className="date"> today </span>
                  </div>
                  <div className="text">
                      Nicdcd
                  </div>
              </div>

          </div>

        </div>
    )
}
// export default Comments