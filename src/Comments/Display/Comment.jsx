import React, {useEffect,useState} from 'react';
import '../styles.css';
import { Markup } from 'interweave';
import moment from 'moment';
import CommentsForm from '../CommentsForm';

function Comment(props){
    const [replies,setReplies] = useState([]);
    const [seeReplies,setSeeReplies] = useState(false);
    const [replyClick, setReplyClick] = useState(false);
    
    const constructReplies = (replies) => {
        setReplies(replies.map(reply => 
            <Comment data={reply} replies={null} isReply={true}/>
        ))
    }

    useEffect(() => {
        if(props.replies){
            constructReplies(props.replies)
        }
    },[])

    return(
        <>
            <div className={`comment-container` + ` ${props.isReply ? 'reply' : ''}`}>
                <div className="d-flex justify-content-between">
                    <p className="comment-name">{props.data.author_name}</p>
                    <p className="comment-date">{moment(props.data.date).format("MMMM Do, YYYY")}</p>
                </div>
                {props.data.content.rendered ?
                    <Markup content={props.data.content.rendered}/>
                    :
                    props.data.content
                }
                <div className="comment-date text-right">
                    
                    <div className="d-flex justify-content-between">
                        {!props.isReply===true ? <i onClick={() => setReplyClick(!replyClick)}className="fas fa-reply"></i> : ""}
                        
                        {replies.length > 0 ? 
                            <p onClick={() => setSeeReplies(!seeReplies)} className="see-replies">{seeReplies ? "Hide" : "See Replies"}</p> 
                        : ""}
                    </div>
                    
                </div>
            </div> 
            {replyClick ? 
                <CommentsForm 
                    addComment={props.addComment}
                    isReplyForm={true}
                    articleId={props.articleId}
                    parentId={props.id}
                />
            :""} 
            {seeReplies ? replies : ""}
         </>
    )
}

export default Comment;