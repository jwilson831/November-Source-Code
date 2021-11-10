import React,{useEffect,useState} from 'react';
import Recents from '../Section/PageComponents/Recents/Recents';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Author from './Author';
import './styles.css';
import PageLoader from '../util/Loader/Loader';

function AuthorContainer(props){
    const [author, setAuthor] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [articles,setArticles] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchAuthor = async () => {
            try{
                const { data } = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people/${id}?_embed=wp:featuredmedia&per_page=100`);
                setAuthor(data);
                setLoaded(true);
            }catch(err){
                console.error(err);
            }
        }
        fetchAuthor();
        setArticles(filterByAuthor(props.articles,id));

    }, [id,props.articles]);

    const filterByAuthor = (articles, authorId) => {
        return articles.filter(art => art.acf.author.find(a => a["ID"] === parseInt(authorId) ))
    }
    
    return(
        <>
                <div className="section-grid">
            {loaded ? 
                    <div className="feature">
                        <Author 
                            name={author.acf.name}
                            bio={author.acf.bio}
                            img={author.acf.image}
                            link={author.acf.url}
                        />
                    </div>
                    :
                    <div className="author-loader">
                        <PageLoader/>
                    </div>
            }
                {articles.length > 0 &&
                    <div className="recent"><Recents articles={articles} comments={props.comments}/></div>
                }
                </div>
        </>
    )
}

export default AuthorContainer;