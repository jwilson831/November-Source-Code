import React from 'react';
import './styles.css';
import Feature from '../components/Feature/Feature';
import Recents from '../components/Recents/Recents';
import SubFeatures from '../components/SubFeatures/SubFeatures';

function Home (props){

    return(
        <div className="home-grid">
            <div className="feature"><Feature data={props.articles.slice(0,1)}/></div>
            <div className="subfeature"><SubFeatures articles={props.articles.slice(1,4)}/></div>
            <div className="recent"><Recents articles={props.articles.slice(4,7)}/></div>
        </div>
    )
}

export default Home;