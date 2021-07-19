import React, {useState, useEffect} from 'react';
import './styles.css';
import moment from 'moment';

function SubFeatures (props){

    const renderArticles = (articles) => {    
        return articles.map( article => 
            <div className="card sub-feature-card">
                <div className="card-body">
                    <div className="category"><p className="cat-text">{article.acf.category}</p></div>
                    <h5 className="" dangerouslySetInnerHTML={{ __html: article.title.rendered }}></h5>
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
            <div className="feature-container">
                {props.articles ? renderArticles(props.articles) : "Loading..."}
            </div>
        </div>
    )
}

export default SubFeatures;