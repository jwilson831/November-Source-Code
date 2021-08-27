import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import SideContainer from '../PrimaryMenu/components/SideContainer';
import PageLoader from '../util/Loader';
import NewsFeed from '../util/NewsFeed'
import Poll from '../util/Poll/Poll'

function ArticleMenu(props){
    const [category,setCategory]=useState("");
    const [loaded,setLoaded] =useState(false);

    const {id} = useParams();
    useEffect(() => {        
        const selectCurrentArticle = (data) => {
            if(Array.isArray(data)){
                return (data.find(article => article.id === parseInt(id)));
            }else{
                return data;
            }
        }
        setCategory(selectCurrentArticle(props.articles).acf.category);
        setLoaded(true);
    },[])
    return(
        <div className="text-left pl-3">
            {loaded ? 
                <>
                    <SideContainer 
                        conferences={props.filterByCategory(props.conferences,category)}
                    />
                    <Poll/>
                    <NewsFeed/>
                </>
                : <PageLoader/>
            }
        </div>
    )
}

export default ArticleMenu;