import React,{useEffect,useState} from 'react';
import Recents from '../PageComponents/Recents/Recents';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Author from './Author';
import './styles.css';
import PageLoader from '../util/Loader';

function AuthorContainer(props){
    const [author, setAuthor] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const fetchAuthor = async () => {
            try{
                const { data } = await axios(`https://skytop-strategies.com/wp-json/wp/v2/contributors/${id}?_embed=wp:featuredmedia&per_page=100`);
                setAuthor(data);
                setLoaded(true);
            }catch(err){
                console.log(err);
            }
        }
        fetchAuthor();

    }, [id]);

    const filterByAuthor = (articles, authorId) => {
        return articles.filter(art => art.acf.author["ID"] === parseInt(authorId))
    }
    return(
        <>
            {loaded ? 
                <div className="section-grid">
                    <div className="feature">
                        <Author 
                            name={author.acf.name}
                            bio={author.acf.bio}
                            img={author._embedded["wp:featuredmedia"][0].source_url}
                        />
                    </div>
                    <div className="recent"><Recents articles={filterByAuthor(props.articles, id)} comments={props.comments}/></div>
                </div>
                :
                <PageLoader/>
            }
        </>
    )
}

export default AuthorContainer;