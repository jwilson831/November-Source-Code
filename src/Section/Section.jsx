import React from 'react';
import './styles.css';
import Feature from './PageComponents/Feature/Feature';
import Recents from './PageComponents/Recents/Recents';
import ViewAllBtn from '../ViewAll/ViewAllBtn';

function Section (props){

    return(
        <div className="">
            <div className="section-feature"><Feature video={props.video}  comments={props.comments}/></div>
            <div className="recent">
                <Recents articles={props.articles.slice(0,3)} comments={props.comments}/>
                <ViewAllBtn linkTo={"article"}/>
            </div>

        </div>
    )
}

export default Section;
