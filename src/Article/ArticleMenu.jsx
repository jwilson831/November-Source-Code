import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import SideContainer from '../PrimaryMenu/components/SideContainer';
import PageLoader from '../util/Loader';
import NewsFeed from '../util/News/NewsFeed';
import Poll from '../util/Poll/Poll'
import DLC from './DLC/DLC';

function ArticleMenu(props){
    const [category,setCategory]=useState("");
    const [loaded,setLoaded] =useState(false);
    const [currentArticle,setCurrentArticle] = useState(null);

    

    const {id} = useParams();
    useEffect(() => {        
        const selectCurrentArticle = (data) => {
            if(Array.isArray(data)){
                return (data.find(article => article.id === parseInt(id)));
            }else{
                return data;
            }
        }
        setCurrentArticle(selectCurrentArticle(props.articles));
        setCategory(selectCurrentArticle(props.articles).acf.category);
        setLoaded(true);
    },[])
    console.log(currentArticle);
    return(
        <div className="text-left pl-3">
            {loaded ? 
                <>
                {currentArticle.acf.dlc &&
                    <DLC 
                        title={currentArticle.acf.dlc.dlc_title}
                        image={currentArticle.acf.dlc.dlc_image}
                        file={currentArticle.acf.dlc.dlc_file}
                    />
                }
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