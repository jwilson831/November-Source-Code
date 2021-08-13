import React from 'react';
import './styles.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Markup} from "interweave";
import CommentsBox from '../../util/CommentsBox/CommentsBox';



function Recents (props){
    const renderArticles = (articles) => {    
        return articles.map( article => 
            <div className="card mb-5">
                <div className="row no-gutters">
                    <div className="col-md-6 text-left">
                        <img className="card-img-top recent-img" src={article._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap"></img>
                    </div>
                    <div className="col-md-6 card-body-column">
                        <div className="card-body">
                            {window.location.pathname === "/" ? <div className="category"><p className="cat-text">{article.acf.category} </p></div> : ""}
                            <Link to={`/articles/${article.id}`}>
                                <h5 className="card-title"><Markup content={article.title.rendered}></Markup></h5>
                            </Link>
                            <div className="byline">
                                <p className="m-0">By <Link to={`/authors/${article.acf.author["ID"]}`}>{article.acf.author.post_title}</Link> / {moment(article.date).format("MMMM Do, YYYY")}</p>
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
            {renderArticles(props.articles)}
        </div>
    )
}

export default Recents;