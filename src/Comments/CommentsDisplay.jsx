import React from 'react';
import './styles.css';
import {Markup} from 'interweave';

function CommentsDisplay(props){

    const renderComments = (comments) => {
        return comments.map(comment => 
            <div className="comment-container">
                <p className="comment-name">{comment.author_name}</p>
                {comment.content.rendered ?
                    <Markup content={comment.content.rendered}/>
                    :
                    comment.content
                }
            </div>    
        )
    }

    return(
        <div>
            {renderComments(props.comments)}
        </div>
        
    )
}

export default CommentsDisplay;