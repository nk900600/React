import React from "react";
import {CommentDetail} from "./NavieComponentApproach1";
import ApprovalCard from "./ApprovalCard";


export function Comments() {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail name="help"/>
            </ApprovalCard>
        </div>
    )
}
// export default Comments