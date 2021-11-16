import React from 'react';
import './styles.css';

function CommentsBox(props){
    const count = props.comments.filter(comment => comment.parent === 0 && comment.post === props.id).length;
    return(
        <div className={"comments-box " + (props.category === "Skytop Survey" ? "survey-comments mb-3 mt-1 mr-2":"")} >
            {props.category === "Skytop Survey" ? 
                <strong><h6 className="com-text pt-1 pb-1">Join the Discussion ({count})</h6></strong>
                :
                <p className="com-text"><span>{count}</span>{count === 1 ? " Comment" : " Comments"}</p>
            }
        </div>
    )
}

export default CommentsBox;