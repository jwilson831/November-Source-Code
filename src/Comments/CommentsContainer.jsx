import React, {useState, useEffect} from 'react'
import CommentsDisplay from './Display/CommentsDisplay';
import CommentsForm from './CommentsForm';
import './styles.css';
import axios from 'axios';
import PageLoader from '../util/Loader';
import LeaveAComment from './LeaveAComment';

function CommentsContainer(props){
    const [comments,setComments] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [clicked,setClicked] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    const [num,setNum] = useState(0);

    useEffect(() => {
        const fetchComments = async () => {
            try{
                const { data } = await axios(`https://skytop-strategies.com/wp-json/wp/v2/comments?post=${props.article.id}`);
                
                setComments(data);
            }catch(err){
                console.error(err);
            }
            setLoaded(true);
        }
        fetchComments();
    },[])

    const addComment = () => {
        setSubmitted(true);
    }
    const clickHandler = () => {
        setClicked(!clicked);
    }
    const setCommentNumber = (number) => {
        setNum(number);
    }
    console.log("running")
    return(
        <>
        {loaded ? 
            <div className="comments-container mt-5 pr-5">
                    <h3>Comments ({num})</h3>
                    <hr></hr>
                    {clicked ? 
                    <CommentsForm 
                        addComment={addComment} 
                        articleId={props.article.id} 
                        data={props.article} 
                        clickHandler={clickHandler}/>
                    : <LeaveAComment clickHandler={clickHandler}/>
                    }
                    
                    <CommentsDisplay 
                        comments={comments} 
                        submitted={submitted}
                        addComment={addComment}
                        articleId={props.article.id}
                        setCommentNumber={setCommentNumber}
                    />
            </div>
            : 
                <PageLoader />
            }
        </>

    )
}

export default CommentsContainer;