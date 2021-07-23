import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Article(props){
    const [data, setData] = useState(null);
    const [loaded,setLoaded] = useState(false);

    useEffect(() => {
        const { match: { params } } = props;
        const fetchData = async () => {
        
        try{
            const {data} = await axios(`https://skytop-strategies.com/wp-json/wp/v2/articles/${params.id}`)

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
        <div className="article-container" >
            {loaded ?
            <div>

                <h1 dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h1>
                {/* <img className="card-img-top recent-img" src={data._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap"></img> */}
                <div className="text-left" dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
            </div>

            : "loading..."}
        </div>
    )
}

export default Article;