import React,{useState,useEffect} from 'react';
import './styles.css';
import { findById } from '../../../util/findById';
import RecentArticle from './RecentArticle';

function Recents (props){
    const [articles,setArticles] = useState([]);

    useEffect(() => {
        const findArticles = (idArray) => {
            const articles = [];
            idArray.forEach(id => {
                const art = findById(id, props.articles);
                articles.push(art);
            })
            return articles;
        }
        if(props.ids){
            setArticles(findArticles(props.ids))
        }else{
            setArticles(props.articles)
        }
    },[props.articles, props.ids])

    const renderArticles = (articles) => {    
        return articles.map( article => 
            <RecentArticle
                id={article.id}
                image={article.acf.image}
                category={article.acf.category}
                title={article.title.rendered}
                custom_byline={article.acf.custom_byline}
                author={article.acf.author}
                date={article.acf.date}
                comments={props.comments}
            />                
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