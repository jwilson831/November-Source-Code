import React, {useEffect} from 'react';
import './styles.css';
import Feature from './PageComponents/Feature/Feature';
import Recents from './PageComponents/Recents/Recents';
import ViewAllBtn from '../ViewAll/ViewAllBtn';
import Advert from '../util/Advert/Advert';
import { sendGAPageView } from '../util/GoogleAnalytics';

function Section (props){
    useEffect(() => {
        sendGAPageView(window.location.pathname);
    },[])
    
    return(
        <div className="">
            <div className="section-feature"><Feature video={props.video}  comments={props.comments} title={props.title}/></div>
            <div className="recent">
                <Advert image={props.ad} link={props.ad_link}/>
                <Recents changeActiveCategory={props.changeActiveCategory} articles={props.articles} ids={props.ids} comments={props.comments}/>
                <ViewAllBtn linkTo={"article"}/>
            </div>

        </div>
    )
}

export default Section;
