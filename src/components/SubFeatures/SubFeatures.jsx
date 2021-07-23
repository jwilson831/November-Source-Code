import React, {useState, useEffect} from 'react';
import './styles.css';
import moment from 'moment';
import {Link} from 'react-router-dom';


function SubFeatures (props){
    const renderArticles = (articles) => {    
        return articles.map( article => 
            <div className="card sub-feature-card">
                <div className="card-body">
                    <div className="category"><p className="cat-text">{article.acf.category}</p></div>
                    <Link to={`articles/${article.id}`}>
                        <h5 className="card-title" dangerouslySetInnerHTML={{ __html: article.title.rendered }}></h5>
                    </Link>
                    <div className="byline">
                        <p className="m-0">By {article.acf.author} / {moment(article.date).format("MMMM Do, YYYY")}</p>
                    </div>
                </div>
            </div>   
        ) 
    }

    return(
        <div className="sub-feature-container">
            <p id="sub-features-title" className="card-title">Features</p>
            {props.articles ? renderArticles(props.articles) : "Loading..."}
        </div>
    )
}

export default SubFeatures;