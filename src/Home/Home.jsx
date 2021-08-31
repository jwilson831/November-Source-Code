import React from 'react';
import './styles.css';
import Feature from '../Section/PageComponents/Feature/Feature';
import Recents from '../Section/PageComponents/Recents/Recents';
import SubFeatures from '../Section/PageComponents/SubFeatures/SubFeatures';
import ViewAllBtn from '../ViewAll/ViewAllBtn';
import Advert from '../util/Advert/Advert';
import ad from '../util/Advert/cyberad.png';
import Calendar from '../util/Calendar/Calendar';

function Home (props){
    console.log(props)
    return(
        <>
        <div className="home-grid">
            <div className="feature">
                <Feature title={props.title} video={props.video} />
            </div>
            <div className="subfeature"><SubFeatures articles={props.articles} ids={[1316,1325,1322]} comments={props.comments}/></div>
            <Advert image={ad}/>
            <div className="recent">
                <Recents changeActiveCategory={props.changeActiveCategory} articles={props.articles} ids={[1284,1319,203,643]} comments={props.comments}/>
                <ViewAllBtn linkTo={"article"}/>
            </div>
        </div>
        <hr></hr>
        <div className="text-left">
            <Calendar calendar={props.calendar}/>
        </div>
        </>
    )
}

export default Home;