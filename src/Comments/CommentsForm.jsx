import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css'

function CommentsForm(props){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [company,setCompany] = useState("");
    const [jobTitle,setJobTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const login = async () => {
            const {data: {token}} = await axios.post(`https://skytop-strategies.com/wp-json/jwt-auth/v1/token?username=${process.env.REACT_APP_WP_USERNAME}&password=${process.env.REACT_APP_WP_PASSWORD}`)
            localStorage.setItem("token", token);
        }
        login();
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            author_name: name,
            content: content,
            post: props.data.id,
            author_email: email
        }
        
        try{
            await axios.post('https://skytop-strategies.com/wp-json/wp/v2/comments', data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`                
                },  
            });
            setName("");
            setEmail("");
            setCompany("");
            setJobTitle("");
            setContent("");
            props.addComment(data);
        }catch (err){
            console.error(err);
        }
    }

    return(
        <div className="form-container">
            <form className="comments-form" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} className="form-control"></input>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="form-control"></input>
                    <label>Company</label>
                    <input onChange={(e) => setCompany(e.target.value)} value={company} className="form-control"></input>
                    <label>Job Title</label>
                    <input onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Comment</label>
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} className="form-control" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary comments-submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentsForm;