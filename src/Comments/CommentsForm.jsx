import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css'

function CommentsForm(props){
    const [name,setName] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const login = async () => {
            const {data: {token}} = await axios.post('https://skytop-strategies.com/wp-json/jwt-auth/v1/token?username=reidwatsonskytop&password=6zRwKp7w6fd9xWQ')
            localStorage.setItem("token", token);
        }
        login();
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            author_name: name,
            content: content,
            post: props.data.id
        }
        
        try{
            await axios.post('https://skytop-strategies.com/wp-json/wp/v2/comments', data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`                
                },  
            });
            props.addComment(data);
        }catch (err){
            console.error(err);
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Comment</label>
                    <textarea onChange={(e) => setContent(e.target.value)} className="form-control" ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentsForm;