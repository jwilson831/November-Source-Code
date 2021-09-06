import React, {useState, useEffect} from 'react';
import './styles.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Markup} from "interweave";
import CommentsBox from '../../../util/CommentsBox/CommentsBox';
import { findById } from '../../../util/findById';



function SubFeatures (props){
    const [articles,setArticles] = useState([]);

    const findArticles = (idArray) => {
        const articles = [];
        idArray.forEach(id => {
            const art = findById(id, props.articles);
            articles.push(art);
        })
        return articles;
    }
    const renderByLine = (authorArray) => {
        let byline = ``;

        let position = 'Skytop Contributor';
        for(let i = 0; i < authorArray.length;i++){
            if(authorArray[i]["ID"] === 529){
                position = "Guest Contributor"
            }else if(authorArray[i]["ID"] === 543){
                position = "Skytop Associate"
            }

            if(authorArray[i+1]){
                byline += `<a href=${`/authors/${authorArray[i]["ID"]}`}>${authorArray[i].post_title}</a>, ${position}, `
            }else{
                byline += `<a href=${`/authors/${authorArray[i]["ID"]}`}>${authorArray[i].post_title}</a>, ${position}`
            }
        }
        return byline;
    }

    useEffect(() => {
        setArticles(findArticles(props.ids))
    },[])

    const renderArticles = (articles) => {    
        return articles.map( article => 
            <div className="card sub-feature-card">
                <div className="card-body">
                    <div className="category"><p className="cat-text">{article.acf.category}</p></div>
                        <Link to={`articles/${article.id}`}>
                            <p className="sub-article-title"><strong><Markup content={article.title.rendered}></Markup></strong></p>
                        </Link>
                    <div className="byline">
                        <p className="m-0">By <Markup content={renderByLine(article.acf.author)}/> / {moment(article.acf.date).format("MMMM Do, YYYY")}</p>
                    </div>
                    <CommentsBox comments={props.comments} id={article.id}/>
                </div>
            </div>   
        ) 
    }
    return(
        <div className="sub-feature-container text-left">
            <p className="section-title">Features</p>
            {renderArticles(articles)}
        </div>
    )
}

export default SubFeatures;