import React, {useEffect, useState} from 'react';
import './styles.css'
import {Markup} from "interweave";
import { useParams } from 'react-router';
import CommentsContainer from '../Comments/CommentsContainer';
import PageLoader from '../util/Loader';


function Article(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {        
        const selectCurrentArticle = (data) => {
            if(Array.isArray(data)){
                return (data.find(article => article.id === parseInt(id)));
            }else{
                return data;
            }
        }
        setData(selectCurrentArticle(props.articles));
        setLoaded(true);
    },[])
    return(
        <>
        {loaded ?
            <div>
                <div className="article-container p-5 mt-3" >
                    <div>
                        {props.editorial_title? 
                            <div className="category edit-category">
                                <p className="cat-text">{props.editorial_title}</p>
                            </div>
                        : ""}
    
                        {!id ? "": 
                            <h1><Markup content={data.title.rendered}></Markup></h1>
                        }
            
                        <img className="card-img-top art-img" src={data.acf.image} alt="Card image cap"></img>
                        <div className="article-text text-left">
                            <p className="article-text"><Markup content={data.content.rendered}></Markup></p>
                        </div>
                    </div>
                </div>
                <div className="comments text-left">
                    <CommentsContainer article={data}/>
                </div>
            </div>
        : <PageLoader/>}
        </>
    )
}

export default Article;