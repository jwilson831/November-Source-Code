import React from 'react';
import ViewAllBtn from '../../ViewAll/ViewAllBtn';
import '../styles.css';
import SideConference from './SideConference';

function SideContainer(props){
    const renderConferences = (conferences) => {
        return conferences.map(conference => 
            <SideConference 
                id={conference.id}
                title={conference.title.rendered}
                tagline={conference.acf.tagline}
                imgUrl={conference._embedded ? conference._embedded["wp:featuredmedia"][0].source_url : null}
                city={conference.acf.city}
                date={conference.acf.date}
            />    
        )
    }
    return(
        <div className="conference-container">
            <p className="section-title">Conferences</p>
            {props.conferences ? renderConferences(props.conferences) : ""}
            <div className="text-right">
                <ViewAllBtn linkTo={"conference"}/>
            </div>
        </div>
    )
}

export default SideContainer;