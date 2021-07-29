import React from 'react';
import './styles.css';
import Feature from '../PageComponents/Feature/Feature';
import Recents from '../PageComponents/Recents/Recents';

function Section (props){

    return(
        <div className="section-grid">
            <div className="section-feature"><Feature data={props.articles.slice(0,1)}/></div>
            <div className="recent"><Recents articles={props.articles.slice(1,4)}/></div>
        </div>
    )
}

export default Section;
