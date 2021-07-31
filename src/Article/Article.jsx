import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Markup} from "interweave";
import { useParams } from 'react-router';


function Article(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(() => {        
        const selectCurrentConference = (articles) => {
            return (articles.filter(art => art.id === parseInt(id))[0])
        }
        setData(selectCurrentConference(props.articles));
        setLoaded(true);
  },[])

    return(
        <div className="article-container p-5" >
            {loaded ?
            <div>
                <h1><Markup content={data.title.rendered}></Markup></h1>
                <img className="card-img-top" src={data._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap"></img>
                <div className="article-text text-left">
                    <p><Markup content={data.content.rendered}></Markup></p>
                </div>
            </div>

            : "loading..."}
        </div>
    )
}

export default Article;