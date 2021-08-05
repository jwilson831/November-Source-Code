import React, {useState, useEffect} from 'react'
import CommentsDisplay from './CommentsDisplay';
import CommentsForm from './CommentsForm';
import './styles.css';
import axios from 'axios';

function CommentsContainer(props){
    const [comments,setComments] = useState(null);
    const [loaded, setLoaded] = useState(false);

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

    const addComment = (comment) => {
        setComments(comments => [comment, ...comments]);
    }

    console.log(comments);
    return(
        <>
        {loaded ? 
            <div className="comments-container mt-5 pr-5">
                    <h3>Comments ({comments.length})</h3>
                    <hr></hr>
                    <CommentsForm addComment={addComment} data={props.article}/>
                    <CommentsDisplay comments={comments}/>
            </div>
            : 
                "loading..."
            }
        </>

    )
}

export default CommentsContainer;