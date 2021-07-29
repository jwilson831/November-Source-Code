import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Markup} from "interweave";

function Article(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);

    useEffect(() => {
        const { match: { params } } = props;
        const fetchData = async () => {
        
        try{
            const {data} = await axios(`https://skytop-strategies.com/wp-json/wp/v2/articles/${params.id}?_embed=wp:featuredmedia&per_page=100`)

            setData(data);
        }catch (error){
            console.log(error);
        }
        setLoaded(true);
        }
        fetchData();
  },[])

    
    console.log(data);
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