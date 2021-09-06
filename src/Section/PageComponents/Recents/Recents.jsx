import React,{useState,useEffect} from 'react';
import './styles.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Markup} from "interweave";
import CommentsBox from '../../../util/CommentsBox/CommentsBox';
import { findById } from '../../../util/findById';
import { renderByLine } from '../../../util/renderByLine';

function Recents (props){
    const [articles,setArticles] = useState([]);

    const findArticles = (idArray) => {
        const articles = [];
        idArray.forEach(id => {
            const art = findById(id, props.articles);
            articles.push(art);
        })
        return articles;
    }
    useEffect(() => {
        if(props.ids){
            setArticles(findArticles(props.ids))
        }else{
            setArticles(props.articles)
        }
    },[])

    const renderArticles = (articles) => {    
        return articles.map( article => 
            <div className="card mb-5">
                <div className="row no-gutters">
                    <div className="col-md-6 text-left">
                        <img className="card-img-top recent-img" src={article.acf.image} alt="Card image cap"></img>
                    </div>
                    <div className="col-md-6 card-body-column">
                        <div className="card-body">
                            {window.location.pathname === "/" ? <div className="category"><p className="cat-text">{article.acf.category} </p></div> : ""}
                            <Link to={`/articles/${article.id}`} >
                                <h5 className="card-title"><Markup content={article.title.rendered}></Markup></h5>
                            </Link>
                            <div className="byline">
                                {article.acf.custom_byline ? 
                                    <p><Markup content={article.acf.custom_byline}/></p>
                                    :
                                    <p className="m-0">By <Markup content={renderByLine(article.acf.author)}/> / {moment(article.acf.date).format("MMMM Do, YYYY")} </p>
                                }
                            </div>
                        </div>
                        <div className="pl-3 recents-comments">
                            <CommentsBox comments={props.comments} id={article.id}/>
                        </div>
                    </div>
                </div>
            </div>
                            
        ) 
    }

    return(
        <div className="recent-container text-left">
            <p className="section-title">Recent Articles</p>
            {renderArticles(articles)}
        </div>
    )
}

export default Recents;