import React, {useEffect} from 'react';
import './styles.css';
import Feature from '../Section/PageComponents/Feature/Feature';
import Recents from '../Section/PageComponents/Recents/Recents';
import SubFeatures from '../Section/PageComponents/SubFeatures/SubFeatures';
import ViewAllBtn from '../ViewAll/ViewAllBtn';
import Advert from '../util/Advert/Advert';
import Calendar from '../util/Calendar/Calendar';
import { sendGAPageView } from '../util/GoogleAnalytics';

function Home (props){
    useEffect(() => {
        sendGAPageView("/headlines");
    },[])
    return(
        <>
        <div className="home-grid">
            <div className="feature">
                <Feature title={props.title} video={props.video} />
            </div>
            <div className="subfeature"><SubFeatures articles={props.articles} ids={[1815,1804,1322]} comments={props.comments}/></div>
            <Advert image={props.ad} link={props.ad_link}/>
            <div className="recent">
                <Recents changeActiveCategory={props.changeActiveCategory} articles={props.articles} ids={[1808,1838,1812,1800,1319]} comments={props.comments}/>
                <ViewAllBtn linkTo={"article"}/>
            </div>
        </div>
        <div className="mt-4">
            <Advert image={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/image.png"} link={"https://esg.moodys.io/"}/>
        </div>
        <hr></hr>
        <div className="text-left">
            <Calendar calendar={props.calendar}/>
        </div>
        </>
    )
}

export default Home;