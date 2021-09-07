import React from 'react';
import './styles.css';

function CommentsBox(props){
    const count = props.comments.filter(comment => comment.parent === 0 && comment.post === props.id).length;
    return(
        <div className="comments-box">
            <p className="com-text"><span>{count}</span>{count === 1 ? " Comment" : " Comments"}</p>
        </div>
    )
}

export default CommentsBox;