import React from 'react';
import './styles.css';

function LeaveAComment(props){

    return(
        <div>
            <button className="comment-btn btn btn-primary" onClick={() => props.clickHandler()}>{props.category === "Skytop Survey" ? "Join the Discussion +": "Share Your Comments +"}</button>
        </div>
    )
}

export default LeaveAComment;