import React, {useEffect,useState} from 'react';
import '../styles.css';
import {Markup} from 'interweave';
import moment from 'moment';
import PageLoader from '../../util/Loader';
import Comment from './Comment';

function CommentsDisplay(props){
    const [comments,setCommments] = useState({});

    const generateComments = (comments) => {
        let commentObj = {};
        let replies = [];
        comments.forEach(com => {
            if(com.parent !== 0){
                replies.push(com);
            }else{
                commentObj[com.id] = com;
            }
        })
        replies.forEach(reply => {
            if(commentObj[reply.parent].replies){
                commentObj[reply.parent].replies.push(reply);
            }else{
                commentObj[reply.parent].replies = [reply];
            }
        })
        setCommments(commentObj);
    }

    useEffect(() => {
        generateComments(props.comments);
    },[])

    const renderComments = (comments) => {
        let finalComments = [];
        for(const comm in comments){
            const current = comments[comm];
            finalComments.push(
            <Comment
                id={current.id}
                addComment={props.addComment}
                data={current} 
                replies={current.replies ? current.replies : null} 
                isReply={false}
                articleId={props.articleId}
            />)
        }
        props.setCommentNumber(finalComments.length)
        return finalComments;
    }
    console.log(props.comments)
    return(
        <div className="comments-outer-container">
            {props.submitted ? 
                <div className="text-center mt-2">
                    <p className="section-title">Your comment has been submitted. Thank You!</p>
                </div>
                :""}

            {comments ? renderComments(comments) : ""}
        </div>
        
    )
}

export default CommentsDisplay;