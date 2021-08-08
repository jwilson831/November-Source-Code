import React from 'react';
import './styles.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Markup} from "interweave";
import CommentsBox from '../../util/CommentsBox/CommentsBox';



function SubFeatures (props){
    const renderArticles = (articles) => {    
        return articles.map( article => 
            <div className="card sub-feature-card">
                <div className="card-body">
                    <div className="category"><p className="cat-text">{article.acf.category}</p></div>
                        <Link to={`articles/${article.id}`}>
                            <p className="sub-article-title"><strong><Markup content={article.title.rendered}></Markup></strong></p>
                        </Link>
                    <div className="byline">
                        <p className="m-0">By {article.acf.author.post_title} / {moment(article.date).format("MMMM Do, YYYY")}</p>
                    </div>
                    <CommentsBox comments={props.comments} id={article.id}/>
                </div>
            </div>   
        ) 
    }
    return(
        <div className="sub-feature-container text-left">
            <p className="section-title">Features</p>
            {props.articles ? renderArticles(props.articles) : "Loading..."}
        </div>
    )
}

export default SubFeatures;