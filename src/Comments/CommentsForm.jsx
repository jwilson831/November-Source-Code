import React, {useState} from 'react';
import axios from 'axios';
import './styles.css';

function CommentsForm(props){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [company,setCompany] = useState("");
    const [jobTitle,setJobTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = {};

        if(props.isReplyForm === true){
            data = {
                author_name: name,
                content: content,
                post: props.articleId,
                parent: props.parentId,
                author_email: email,
                link: company 
            }
        }else{
            data = {
                author_name: name,
                content: content,
                post: props.articleId,
                author_email: email,
                link: company 
            }
        }
        try{
            await axios.post('https://skytop-strategies.com/wp-json/wp/v2/comments', data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${props.token}`                
                },  
            });
            setName("");
            setEmail("");
            setCompany("");
            setJobTitle("");
            setContent("");
            props.addComment();
        }catch (err){
            console.error(err);
        }
    }

    return(
        <div className="form-container">
            <form className="comments-form" onSubmit={handleSubmit} >
                <div className="form-group">
                    {props.clickHandler ? <div onClick={() => props.clickHandler()}className="text-right search-exit">✖️</div>:""}
                    
                    <p className="section-title">{props.isReplyForm===true? "Leave a Reply" : "Share Your Comments"}</p>
                    <div className="d-flex align-items-center comment-data-container">
                        <label className="comment-data-label">Name: </label>
                        <input className="comment-data-input form-control" onChange={(e) => setName(e.target.value)} value={name}></input>
                    </div>
                    <div className="d-flex align-items-center comment-data-container">
                        <label className="comment-data-label">Email: </label>
                        <input className="comment-data-input form-control" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="d-flex align-items-center comment-data-container">
                        <label className="comment-data-label">Company: </label>
                        <input className="comment-data-input form-control" onChange={(e) => setCompany(e.target.value)} value={company}></input>
                    </div>
                    <div className="d-flex align-items-center comment-data-container">
                        <label className="comment-data-label">Job Title: </label>
                        <input className="comment-data-input form-control" onChange={(e) => setJobTitle(e.target.value)} value={jobTitle}></input>
                    </div>
                </div>
                <div className="form-group">
                    <label>Comment</label>
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} className="form-control" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary comment-btn">Submit</button>
            </form>
        </div>
    )
}

export default CommentsForm;