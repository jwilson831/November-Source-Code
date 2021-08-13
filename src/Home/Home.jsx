import React from 'react';
import './styles.css';
import Feature from '../Section/PageComponents/Feature/Feature';
import Recents from '../Section/PageComponents/Recents/Recents';
import SubFeatures from '../Section/PageComponents/SubFeatures/SubFeatures';

function Home (props){

    return(
        <div className="home-grid">
            <div className="feature"><Feature video={props.video} data={props.articles.slice(0,1)}/></div>
            <div className="subfeature"><SubFeatures articles={props.articles.slice(1,4)} comments={props.comments}/></div>
            <div className="recent"><Recents articles={props.articles.slice(4,8)} comments={props.comments}/></div>
        </div>
    )
}

export default Home;