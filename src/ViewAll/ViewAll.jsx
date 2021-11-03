import React, {useEffect} from 'react';
import ConfCard from '../Conference/components/ConfCard';
import Recents from '../Section/PageComponents/Recents/Recents';
import { sendGAPageView } from '../util/GoogleAnalytics';
import './styles.css';

function ViewAll(props){
    useEffect(() => {
        sendGAPageView(window.location.pathname);
    },[])

    const renderData = () => {
        if (props.articles){
            return(
                <>
                    <Recents articles={props.articles} comments={props.comments}/>
                </>
            )
        }else{
            return(
                <>
                    {props.conferences.map(conf => 
                        <ConfCard
                            id={conf.id} 
                            imgUrl={conf.acf.location_image ? conf.acf.location_image : conf._embedded["wp:featuredmedia"][0].source_url}
                            title={conf.title.rendered}
                            tagline={conf.acf.tagline}
                            city={conf.acf.city}
                            date={conf.acf.date}
                            custom_date={conf.acf.custom_date}
                        />
                    )}
                </>
            )
        }
    }
    return (
        <div className="view-all-container">
            {renderData()}
        </div>
    )
}

export default ViewAll;

