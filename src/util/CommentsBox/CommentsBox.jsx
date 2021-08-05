import React from 'react';
import './styles.css';

function CommentsBox(props){
    return(
        <div className="comments-box">
            <p className="com-text"><span>{props.comments.filter(comment => comment.post === props.id).length}</span> Comments</p>
        </div>
    )
}

export default CommentsBox;