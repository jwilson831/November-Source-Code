import React, {useEffect, useState} from 'react';
import './styles.css'
import {Markup} from "interweave";
import { useParams } from 'react-router';
import CommentsContainer from '../Comments/CommentsContainer';
import PageLoader from '../util/Loader/Loader';
import { renderByLine } from '../util/renderByLine';
import moment from 'moment';
import { sendGAPageView } from '../util/GoogleAnalytics';


function Article(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {  
        sendGAPageView(window.location.pathname);

        const selectCurrentArticle = (data) => {
            if(Array.isArray(data)){
                return (data.find(article => article.id === parseInt(id)));
            }else{
                return data;
            }
        }
        setData(selectCurrentArticle(props.articles));
        setLoaded(true);
    },[id,props.articles])

    

    return(
        <>
        {loaded ?
            <div>
                <div className="article-container mt-3" >
                    <div>
                        {data.acf.category === "Skytop Survey" &&
                            <div className="survey-article-header mb-4">
                                <div className="m-auto ">
                                    <h3>Skytop Perspectives</h3>
                                </div>
                                <div className="mr-auto ml-auto mt-3">
                                    <h5 className="m-0">Your Voice Has Been Counted!</h5>
                                </div>
                            </div>
                        }
                        {props.editorial_title && 
                            <div className="category edit-category">
                                <p className="cat-text">{props.editorial_title}</p>
                            </div>
                        }
    
                        {!id ? "": 
                            <div>
                                <h1><Markup content={data.title.rendered}></Markup></h1>
                            </div>
                        }
                        
                        {props.editorial_title ?
                            <div className="text-left">
                                <img className="edit-display-image" src={data.acf.image} alt="editorial"></img>
                            </div> 
                            :
                            <img className="card-img-top art-img" src={data.acf.image} alt="editorial"></img>
                        }
                        
                        <div className="text-left">
                            {data.acf.custom_byline || !id ? 
                                <p><strong><Markup content={data.acf.custom_byline}/></strong></p>
                                :
                                <>
                                    <p className="m-0"><strong>By <Markup content={renderByLine(data.acf.author)}/> / {moment(data.acf.date).format("MMMM Do, YYYY")}</strong></p>
                                    <br></br>
                                </>
                            }
                        </div>
                        <div className="article-text text-left">
                            <p className="article-text"><Markup content={data.content.rendered}></Markup></p>
                        </div>
                    </div>
                </div>
                <div className="comments text-left">
                    <CommentsContainer article={data} category={data.acf.category}/>
                </div>
            </div>
        : <PageLoader/>}
        </>
    )
}

export default Article;