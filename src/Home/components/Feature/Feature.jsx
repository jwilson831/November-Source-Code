import React, {useState, useEffect} from 'react';
import moment from 'moment';

import './styles.css';

function Feature (props){
    const [author,setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [category,setCategory] = useState("");
    const [excerpt,setExcerpt] = useState("");
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [loading,setLoading] = useState(false);
    
    useEffect(() => {
        if(props.data){
            const {date} = props.data
            const {author, category} = props.data.acf;
            const title = props.data.title.rendered;
            const image = props.data._embedded["wp:featuredmedia"][0].source_url;
            const excerpt = props.data.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");
            
            setAuthor(author);
            setDate(moment(date).format("MMMM Do, YYYY"));
            setCategory(category);
            setExcerpt(excerpt);
            setTitle(title);
            setImage(image);

            setLoading(true);
        }
    },[props])
    console.log(props);
    
    return(
        <div className="feature-container">
            {loading ? 
                <div class="card">
                    <img class="card-img-top" src={image} alt="Card image cap"></img>
                    <div class="card-body">
                        <div className="category"><p className="cat-text">{category} </p></div>
                        <h5 class="card-title" dangerouslySetInnerHTML={{ __html: title }}></h5>
                        <div className="excerpt">
                            {excerpt}
                        </div>
                        <div className="byline">
                            <p className="m-0">By {author} / {date}</p>
                        </div>
                    </div>
                </div>
                : <p>Loading...</p>
            }
        </div>
    )
}

export default Feature;