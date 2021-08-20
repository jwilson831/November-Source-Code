import React from 'react';
import './styles.css';
import Feature from '../Section/PageComponents/Feature/Feature';
import Recents from '../Section/PageComponents/Recents/Recents';
import SubFeatures from '../Section/PageComponents/SubFeatures/SubFeatures';
import ViewAllBtn from '../ViewAll/ViewAllBtn';
import Advert from '../util/Advert/Advert';
import ad from '../util/Advert/ICM.jpg';

function Home (props){

    return(
        <div className="home-grid">
            <div className="feature">
                <Feature video={props.video} />
            </div>
            <div className="subfeature"><SubFeatures articles={props.articles.slice(0,3)} comments={props.comments}/></div>
                
            <div className="recent">
                <Advert image={ad}/>
                <Recents articles={props.articles.slice(4,8)} comments={props.comments}/>
            </div>
            <ViewAllBtn linkTo={"article"}/>
        </div>
    )
}

export default Home;